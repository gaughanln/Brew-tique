import React from 'react';
import './App.css';
import { Cart, Home, Login, Products, User, Header, Footer } from './components'



function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  // setting up pathing
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } if (currentPage === 'Products') {
      return <Products />;
    } if (currentPage === 'Cart') {
      return <Cart />;
    } if (currentPage === 'User') {
      return <User />;
    } if (currentPage === 'login') {
      return <Login />;
    }
    return <Home />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

// rendering the components
  return (
    <>
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    </>
  );
}

export default App;
