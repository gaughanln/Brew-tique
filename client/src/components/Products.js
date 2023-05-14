import React, {useState} from "react";
import { Link } from "react-router-dom";
import ontap from "../assets/ontap.png";
import { toast } from "react-toastify";
import { GET_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function Products(props) {
  const { cart, setCart } = props;

  const { loading, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;

  const coffee = data?.getProducts || [];

  const addToCart = (product) => {
    const existingCartItem = cart.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingCartItem) {
      const updatedCartItems = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      setCart(updatedCartItems);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success("Added to your cart!");
  };

  return (
    <div>
      <div className="container  center-align text-center">
        <img src={ontap} className="ontap" alt="Products" />
        <div className="row">
          {coffee && (
            <div className="products-text">
              {coffee.map((coffee) => (
                <div key={coffee.id} className="products col s12 m6 l4">
                  <img
                    src={coffee.image}
                    className="products-img"
                    alt={coffee.name}
                    height="300"
                  />
                  <h3 className="truncate">{coffee.name}</h3>
                  <p>${coffee.price}</p>

                  <button
                    className="waves-effect  btn-large brown-btn"
                    onClick={() => addToCart(coffee)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}

          <Link className="btn-large waves-effect  green-btn" to="/cart">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
