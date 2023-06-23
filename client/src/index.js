import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import client from './apolloClient'; 
import { ApolloProvider } from '@apollo/client';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


