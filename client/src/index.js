import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import client from './apolloClient'; 
import { ApolloProvider } from '@apollo/client';

if(process.env.NODE_ENV !== 'production') {
  db.connect(process.env.MONGODB_URI);
} else {
  db.connect('mongodb://127.0.0.1:27017/Brewtique');
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


