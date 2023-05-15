import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import path from 'path';
import resolvers from './schemas/index.js';
import { authMiddleware } from './utils/auth.js';
import db from './config/connection.js';

const PORT = process.env.PORT || 3001;
const app = express();

const typeDefs = `#graphql
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
    input UpdateUserInput {
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
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(input: UpdateUserInput!): User
        addAddress(userId: ID!, street: String!, city: String!, state: String!, zip: String!, country: String!): User
        deleteUser(userId: ID!): Boolean
    }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  cache: "bounded"
});

const port = Number.parseInt(process.env.PORT || '4000');
const { url } = await startStandaloneServer(server, {
  listen: { port },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`Server ready at ${url}`);
  })
});

startApolloServer();

