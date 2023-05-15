import React from "react";
import { Link } from "react-router-dom";
import ontap from "../assets/ontap.png";
import { toast } from "react-toastify";
import { GET_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { v4 as uuidv4 } from 'uuid';


function Products(props) {
  const { cart, setCart } = props;
  console.log(props.cart);
  console.log(props.setCart);

  const { loading, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;

  const coffee = data?.getProducts || [];

  const addToCart = (product) => {
    const item = { ...product, id: uuidv4(), quantity: 1 };
    const itemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (itemIndex === -1) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    }
    toast.success("☕️ Added to your cart!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: false,
    });
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

                  <button className="waves-effect  btn-large brown-btn" onClick={() => addToCart(coffee)}>Add to Cart</button>
                </div>
              ))}
            </div>
          )}
<br/>
          
        </div>
        <Link className="btn-large waves-effect  green-btn" to="/cart">
            Checkout
          </Link>
      </div>
    </div>
  );
}

export default Products;

