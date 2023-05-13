import React from "react";
import { Link } from "react-router-dom";
import ontap from "../assets/ontap.png";

// import {dreams, sundown, ethiopian} from "../../client/src/assets";
// import sundown from "../assets/sundown.png";
// import ethiopian from "../assets/ethiopian.png";
// import sumatra from "../assets/sumatra.png";
// import colombian from "../assets/colombian.png";
// import pinon from "../assets/pinon.png";

import { GET_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function Products(props) {
  const { cart, setCart } = props;

  const { loading, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;

  const coffee = data?.getProducts || [];

  const addToCart = (product) => {
    setCart([...cart, product]);
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
            {" "}
            Checkout{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
