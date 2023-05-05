import React, { useState, Routes, Route } from 'react';
import './App.css';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Footer';
import Products from './components/Products';
import User from './components/User';
// import { Cart, Footer, Header, Products, User } from './components';



function App() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // // setting up pathing
  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home handlePageChange={handlePageChange} />;
  //   } if (currentPage === 'Products') {
  //     return <Products />;
  //   } if (currentPage === 'Cart') {
  //     return <Cart />;
  //   } if (currentPage === 'User') {
  //     return <User />;
  //   } if (currentPage === 'Login') {
  //     return <Login />;
  //   }
  //   return <Home />;
  // };
  // const handlePageChange = (page) => setCurrentPage(page);

// rendering the components
  return (
    
    <BrowserRouter>
    <main>
      <Routes>
        <Route path ="/" element ={<Home />} />
          </Routes>
          </main>
          </BrowserRouter>
  );
}

export default App;


{/* <div>
<Header currentPage={currentPage} handlePageChange={handlePageChange} />
{renderPage()}
<Footer />
</div> */}