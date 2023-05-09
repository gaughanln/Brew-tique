import React, { useState } from 'react';


const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const products = [
    {
      id: 1,
      name: 'Light Roast',
      price: 10.99,
      image: '',
    },
    {
      id: 2,
      name: 'Medium Roast',
      price: 10.99,
      image: '',
    },
    {
      id: 3,
      name: 'Ultra Premium "you need this in your life" Dark Roast',
      price: 30.99,
      image: '',
    }
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
