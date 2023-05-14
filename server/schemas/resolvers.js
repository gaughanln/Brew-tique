const { AuthenticationError } = require('apollo-server-express');
const { User, Coffee } = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // const user = getUser(context);
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }
            console.log("context", context);
            const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
            console.log(userData)
            return userData;

        },
        users: async (parent, { filter }) => {
            const filterCriteria = {};
            if (filter) {
                if (filter.firstName) {
                    filterCriteria.firstName = { $regex: filter.firstName, $options: "i" };
                }
                if (filter.lastName) {
                    filterCriteria.lastName = { $regex: filter.lastName, $options: "i" };
                }
                if (filter.email) {
                    filterCriteria.email = { $regex: filter.email, $options: "i" };
                }
            }
            const users = await User.find(filterCriteria);
            return users;
        },
        getProducts: async (parent, args, context) => {
            const products = await Coffee.find({});
            return products;
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user }; 
        },
        logout: async (_, __, { req }) => {
            if (req.session) {
              req.session.destroy(); // Destroy the session to log out the user
              return true; // Return true to indicate successful logout
            }
            throw new AuthenticationError('Not logged in');
          },
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            console.log('HELP!!')
            const token = signToken(user);
            console.log('HELLO')
            return { token, user };
        },

        updateUser: async (parent, { firstName, lastName, email, password }, context) => {
            if (context.user) {
                const update = {};
                if (firstName) update.firstName = firstName;
                if (lastName) update.lastName = lastName;
                if (email) update.email = email;
                if (password) update.password = password;

                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $set: update },
                    { new: true }
                ).select('-__v -password');
                return updatedUser;
            }
            throw new AuthenticationError('Not logged in');
        },
        addAddress: async (parent, { userId, street, city, state, zip, country }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $push: {
                            address: {
                                street,
                                city,
                                state,
                                zip,
                                country,
                            },
                        },
                    },
                    { new: true }
                ).select('-__v -password');
                return updatedUser;
            }
            throw new AuthenticationError('Not logged in');
        },
        deleteUser: async (parent, { userId }, context) => {
            if (context.user) {
                if (context.user._id === userId) {
                    await User.findByIdAndDelete(userId);
                    return true;
                } else {
                    throw new AuthenticationError('You can only delete your own account');
                }
            }
            throw new AuthenticationError('Not logged in');
        }
    },
};

module.exports = resolvers;
