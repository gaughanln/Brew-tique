const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const signToken = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            try {
              const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
              return userData;
            } catch (error) {
              throw new Error('Failed to fetch user data');
            }
          }
          throw new AuthenticationError('Not logged in');
        },
        getProducts: async () => {
          try {
            const products = await Coffee.find();
            return products;
          } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch products');
          }
        },
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
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, { firstName, lastName, email, password }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $set: { firstName, lastName, email, password } },
                    { new: true }
                ).select('-__v -password');
                return updatedUser;
        }
        throw new AuthenticationError('Not logged in');
    },
},
};

module.exports = resolvers;