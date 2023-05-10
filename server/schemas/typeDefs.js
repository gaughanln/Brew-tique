const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
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
    type Query {
        me: User
        getProducts: [Coffee]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
    }
`;

module.exports = typeDefs;