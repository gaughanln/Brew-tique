import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import oops from "../assets/oops.png";
import carttext from "../assets/carttext.png";

function Cart({ cart, setCart }) {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDelete = (itemToDelete) => {
    const updatedCart = cart.filter((item) => item.id !== itemToDelete);
    setCart(updatedCart);
  };

  const handleIncrement = (itemToUpdate) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemToUpdate.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrement = (itemToUpdate) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemToUpdate.id) {
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const token = localStorage.getItem("token"); // get the token from a cookie
  const [cartItems, setCartItems] = useState(() => {
    const cartData = sessionStorage.getItem(`cart-${token}`);
    return cartData ? JSON.parse(cartData) : cart;
  });

  useEffect(() => {
    sessionStorage.setItem(`cart-${token}`, JSON.stringify(cartItems));
    localStorage.setItem(`cart-${token}`, JSON.stringify(cartItems));
  }, [cartItems, token]);

  return (
    <div className="container">
      {cart.length === 0 ? (
        <>
          <div className="row  valign-wrapper ">
            <div className="col center-align ">
              <img src={oops} className="oops" alt="Your cart is empty" />
              <br />
              <Link
                className="btn-large waves-effect  green-btn"
                to="/products"
              >
                Shop now!
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div>
          <img
            src={carttext}
            className="cart-header center-align"
            alt="You've got great taste"
          />
          {cart.map((item) => (
            <div>
              <div className="row valign-wrapper cards" key={item.id}>
                <div className="col m4 center-align">
                  {/*  image */}
                  <img src={item.image} className="inthecart" height="200px" />
                  <br />
                </div>

                {/* name and price */}
                <div className="col  m4 center-align">
                  <p className="cart-text">
                    {item.name} <br /> $ {item.price}
                  </p>
                </div>
                <div className="col  m4 center-align">
                  <div className="cart-quantity quantity-text">
                    <p>Quantity</p>
                    <a
                      className="quantity-text quantity"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </a>
                    <span className="quantity-text">{item.quantity}</span>
                    <a
                      className="  quantity-text quantity "
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </a>
                  </div>

                  <a
                    className=" trash cart-btns"
                    onClick={() => handleDelete(item.id)}
                  >
                    🗑
                  </a>
                </div>
              </div>
              <div className="row">
                <hr class="solid" />
              </div>
            </div>
          ))}
          <div>
            <div className="row cart-btns center-align">
              <div className="col m4 s12">
                <a className="waves-effect btn-large checkout-btn">
                  Total: ${totalPrice.toFixed(2)}
                </a>
              </div>

              <div className="col m4 s12">
                <Link
                  className="btn-large waves-effect green-btn"
                  to="/products"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="col m4 s12">
                <a className="waves-effect btn-large brown-btn checkout-btn ">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
