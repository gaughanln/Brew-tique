import React from "react";
import { Link } from "react-router-dom";
import oops from "../assets/oops.png";
import carttext from '../assets/carttext.png'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cartItems: [], // array of items in the cart //not messing your stuff up
    };
  }

  render() {
    // const { cartItems } = this.state;
    const { cart: cartItems } = this.props; // the props is taking the item from the shop menu and lifting it to the parent and then sending it to the cart
    return (
      <div>
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
           <img src={carttext} className="cart-header" alt="You've got great taste" />
            <div className="row  cards valign-wrapper center-align">
              {cartItems.map((item, index) => (
                <a key={index}>
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
                  </div>
                </a>
              ))}
            </div>
            <div>
              <div className="row cards center-align">
                <div className="col s12 center-align waves-effect  btn-large checkout-btn ">
                  {/* total */}
                  <strong>
                    Total: ${" "}
                    {cartItems.reduce((acc, item) => acc + item.price, 0)}
                  </strong>
                </div>

                {/* submit button */}
                <a className="waves-effect btn-large brown-btn checkout-btn ">
                  Checkout
                </a>

                <Link
                  className="btn-large waves-effect  green-btn"
                  to="/products"
                >
                  continue shopping
                </Link>


              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
