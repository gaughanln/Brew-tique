import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';

const ProductPage = () => {
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/data/products.json');
  //       const data = await response.json();
  //       setProduct(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const { cart } = state;

  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === _id)
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: _id,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //     idbPromise('cart', 'put', {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...item, purchaseQuantity: 1 }
  //     });
  //     idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
  //   }
  // }

  return (
  <div className="container my-1">
    <Link to="/">
        ← Back to Products
    </Link>
    {product ? (
        <div className="card mb-3">
            <h2 className="card-header">{product.name}</h2>
            <div className="card-body">
                <p>{product.description}</p>
                <p className="card-text">
                    <strong>Price:</strong>
                    ${product.price}{' '}
                    {/* <button className="btn btn-primary" onClick={addToCart}>Add to cart</button> */}
                </p>
            </div>
        </div>
    ) : null}
    </div>
    );
};

export default ProductPage;
