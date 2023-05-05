import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [], // array of items in the cart
    };
  }

  render() {
    const { cartItems } = this.state;

    return (
      <div>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
            <div>
              Total: {cartItems.reduce((acc, item) => acc + item.price, 0)}
            </div>
            <button>Checkout</button>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
