import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import User from './components/User';
// import { Cart, Footer, Header, Products, User } from './components';

// toastify imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// / Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  const [cart, setCart] = useState([]);

  // TODO update naming of my account. Maybe user profile? Fix all pathing on it when done

  // not sure if path='/myaccount/:userId' will work yet or if it's needed

  // rendering the components
  return (

    <ApolloProvider client={client}>
      <ToastContainer />

      <Router>

        <main>

          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart cart={cart} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<CreateUser />} />
            <Route path='/products' element={<Products cart={cart} setCart={setCart} />} />
            <Route path='/myaccount' element={<User />} />

            {/* <Route path='/myaccount/:userId' element= {<Cart />} /> */}
          </Routes>
          <Footer />
        </main>

      </Router>

    </ApolloProvider >
  );
}

export default App;
