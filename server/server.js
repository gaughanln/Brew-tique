const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  // context: ({ req }) => {
  //   // get the authorization token from the headers
  //   const token = req.headers.authorization || '';
  //   // return the token in an object
  //   return { token };
  // },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  });
}

  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  });
  

  startApolloServer();
  
