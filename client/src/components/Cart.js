import React from "react";
import { Link } from "react-router-dom";
import oops from "../assets/oops.png";
import carttext from "../assets/carttext.png";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      // quantityUpdated: false,
    };
  }

  // incrementQuantity = (product) => {
  //   this.setState((prevState) => {
  //     const cartItems = [...prevState.cartItems];
  //     const index = cartItems.findIndex((item) => item.id === product.id);
  //     if (index !== -1) {
  //       cartItems[index] = {
  //         ...cartItems[index],
  //         quantity: cartItems[index].quantity + 1,
  //       };
  //       return { cartItems, quantityUpdated: true };
  //     }
  //     return null;
  //   });
  // };

  // Update the decrementQuantity method to set quantityUpdated to true
  // decrementQuantity = (product) => {
  //   this.setState((prevState) => {
  //     const cartItems = [...prevState.cartItems];
  //     const index = cartItems.findIndex((item) => item.id === product.id);
  //     if (index !== -1) {
  //       cartItems[index] = {
  //         ...cartItems[index],
  //         quantity: cartItems[index].quantity - 1,
  //       };
  //       if (cartItems[index].quantity === 0) {
  //         cartItems.splice(index, 1);
  //       }
  //       return { cartItems, quantityUpdated: true };
  //     }
  //     return null;
  //   });
  // };






  render() {
    // const { cartItems } = this.state;
    const { cart: cartItems } = this.props; // the props is taking the item from the shop menu and lifting it to the parent and then sending it to the cart
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





                    {/* <button onClick={() => this.incrementQuantity(cartItem)}>
                      +
                    </button>

                    {cartItem.quantityUpdated ? (
                      <span className="updated-quantity">
                        {cartItem.quantity}
                      </span>
                    ) : (
                      <span>{cartItem.quantity}</span>
                    )}

                    <button onClick={() => this.decrementQuantity(cartItem)}>
                      -
                    </button> */}
               
        

               
               
               
               
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
                    {cartItems.reduce((acc, item) => acc + item.price, 0)}
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
}

export default Cart;
