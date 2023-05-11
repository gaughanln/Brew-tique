const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // get the authorization token from the headers
    const token = req.headers.authorization || '';
    // return the token in an object
    return { token };
  },
  // add the authMiddleware function to the context
  context: authMiddleware
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
  try {
    await server.start();
    console.log('server started');
    server.applyMiddleware({ app });

    db.once('open', () => {
      console.log('database connection opened');
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });

    db.on('error', (error) => {
      console.error('Error connecting to the database:', error);
    });

  } catch (error) {
    console.error('Error starting Apollo Server:', error.message);
  }
};

console.log('calling startApolloServer');
startApolloServer();
console.log('startApolloServer called');
