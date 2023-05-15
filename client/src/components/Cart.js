import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import oops from "../assets/oops.png";
import carttext from '../assets/carttext.png'

function Cart({ cart, setCart  }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleDelete = (itemToDelete) => {
    const updatedCart = cart.filter((item) => item.id !== itemToDelete);
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
          <img src={carttext} className="cart-header" alt="You've got great taste" />
          <div className="row  cards valign-wrapper center-align">
            {cart.map((item) => (
              <a key={item.id}>
                <div className="col s6 center-align">
                  {/*  image */}
                  <img
                    src={item.image}
                    className="inthecart"
                    height="200px"
                  />
                  <br />
                </div>

                {/* name and price */}
                <div className="col s6 center-align">
                  <p className="cart-text">
                    {item.name} <br /> $ {item.price}
                  
                  </p>
                  <button className ="waves-effect hoverable btn-small green-btn" onClick={() => handleDelete(item.id)}>🗑</button>

                </div>
              </a>
            ))}
          </div>
          <div>
            <div className="row cards center-align">
              <div className="col s12 center-align cart-btns ">
                {/* total */}
                <a className="waves-effect  btn-large checkout-btn">
                  Total: ${totalPrice}
                </a>
              </div>

              {/* submit button */}
              <div className="col s12 center-align cart-btns ">
                <a className="waves-effect btn-large brown-btn checkout-btn ">
                  Checkout
                </a>
              </div>

              <div className="col s12 center-align cart-btns ">
                <Link
                  className="btn-large waves-effect  green-btn"
                  to="/products"
                >
                  continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
