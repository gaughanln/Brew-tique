import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cartItems: [], // array of items in the cart //not messing your stuff up
    };
  }

  render() {
    // const { cartItems } = this.state;
    const { cart: cartItems} = this.props; // the props is taking the item from the shop menu and lifting it to the parent and then sending it to the cart
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
