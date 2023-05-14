import React, {useState} from "react";
import { Link } from "react-router-dom";
import oops from "../assets/oops.png";
import carttext from "../assets/carttext.png";

function Cart(props) {
  const [cartItems, setCartItems] = useState(props.cart);
  const [quantityUpdated, setQuantityUpdated] = useState(false);


  const incrementQuantity = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[index] = {
        ...newCartItems[index],
        quantity: newCartItems[index].quantity + 1,
      };
      setCartItems(newCartItems);
      setQuantityUpdated(true);
    }
  };

  const decrementQuantity = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[index] = {
        ...newCartItems[index],
        quantity: newCartItems[index].quantity - 1,
      };
      if (newCartItems[index].quantity === 0) {
        newCartItems.splice(index, 1);
      }
      setCartItems(newCartItems);
      setQuantityUpdated(true);
    }
  };


  return (
    <div className="container">
        {cartItems.length === 0 ? (
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
              className="cart-header"
              alt="You've got great taste"
            />
            <div className="row  cards valign-wrapper center-align">
              {cartItems.map((cartItem, index) => (
                <a key={index}>
                  <div className="col s6 center-align">
                    {/*  image */}
                    <img
                      src={cartItem.image}
                      className="inthecart"
                      height="200px"
                    />
                    <br />
                  </div>

                  {/* name and price */}
                  <div className="col s6 center-align">
                    <p className="cart-text">
                      {cartItem.name} <br /> $ {cartItem.price}
                    </p>
                  </div>
                  <div>



                  <button
                    className="waves-effect btn-small cart-btns green-btn"
                    onClick={() => incrementQuantity(cartItem)}
                  >
                    +
                  </button>

                  {quantityUpdated ? (
                    <span className="updated-quantity">{cartItem.quantity}</span>
                  ) : (
                    <span className="quantity">{cartItem.quantity}</span>
                  )}

                  <button
                    className="waves-effect btn-small cart-btns green-btn"
                    onClick={() => decrementQuantity(cartItem)}
                  >
                    -
                  </button>
               
        

               
               
               
               
                  </div>
                </a>
              ))}
            </div>
            <div>
              <div className="row cards center-align">
                <div className="col s12 center-align cart-btns ">
                  {/* total */}
                  <a className="waves-effect  btn-large checkout-btn">
                    Total: $
                    {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}

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
  };


export default Cart;
