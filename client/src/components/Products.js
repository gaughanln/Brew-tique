import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ontap from "../assets/ontap.png";
import dreams from "../assets/dreams.png";
import sundown from "../assets/sundown.png";

import medium from "../assets/medium.png";

// from stevie
// import { useQuery } from '@apollo/react-hooks';
// import { GET_PRODUCTS } from '../../utils/queries';

// added the images and more coffee data so we could get the look of it all - helps for styling. Delete once data is linked from the database.

const getProducts = () => {
  return {
    data: [
      {
        id: 1,
        name: "Light Roast",
        price: 10.99,
        image: dreams,
      },
      {
        id: 2,
        name: "Medium Roast",
        price: 10.99,
        image: sundown,
      },
      {
        id: 3,
        name: "Ultra Premium",
        price: 30.99,
        image: medium,
      },
      {
        id: 4,
        name: "Light Roast",
        price: 10.99,
        image: dreams,
      },
      {
        id: 5,
        name: "Medium Roast",
        price: 10.99,
        image: sundown,
      },
      {
        id: 6,
        name: "Ultra Premium",
        price: 30.99,
        image: medium,
      },
    ],
    loading: false,
  };
};

const Products = (props) => {
  const { cart, setCart } = props;
  const { data, loading } = getProducts(); //replace this with the graphQl query
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!loading) {
      setProducts(data);
    }
  }, [data, loading]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      {/* <h2>Products</h2> */}
      <div className="container  center-align text-center">
        <img src={ontap} className="ontap" alt="Products" />
        <div className="row">
        <div className="products-text" >
          {products.map((product) => (
            <div
              key={product.id}
              className="products col s12 m6 l4"
              
            >
              <img
                src={product.image}
                className="products-img"
                alt={product.name}
                height="300"
              />
              <h3 className ="truncate">{product.name}</h3>
              <p>${product.price}</p>
              <button
                className="waves-effect  btn-large brown-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        </div>
        <Link
            className="btn-large waves-effect  green-btn" to="/cart" > Checkout </Link>
      </div>
    </div>
  );
};

export default Products;
