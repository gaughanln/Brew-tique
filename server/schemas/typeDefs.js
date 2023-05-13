const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        address: [Address]
    }
    type Address {
        userId: ID! 
        street: String!
        city: String!
        state: String!
        zip: String!
        country: String!
    }
    type Coffee {
        _id: ID!
        name: String!
        image: String!
        location: String!
        roast: String!
        description: String!
        price: Float!
    }
    type Auth {
        token: ID!
        user: User
    }
    input UserFilterInput {
        firstName: String
        lastName: String
        email: String
    }
    type Query {
        me: User
        getProducts: [Coffee]
        users(filter: UserFilterInput): [User]
    }   
    type Mutation {
        login(email: String!, password: String!): Auth
        logout: Boolean!
        addUser(firstName: String!, lastName: String!, email: String!, password: String!) : Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        addAddress(userId: ID!, street: String!, city: String!, state: String!, zip: String!, country: String!): User
    }
`;

module.exports = typeDefs;