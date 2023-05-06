import React from "react";
import brewtiqueSmall from "../assets/brewtiqueSmall.png";
import beans from "../assets/beans.png";
import cart from "../assets/cart.png";
import { Link, NavLink } from "react-router-dom";


// TODO if time, add mobile collapse

function Header() {
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          {/* company name logo in nav bar - If it isn't on the home page, the brewtique logo will appear */}

          {/* <div className="navbar-brand">
          {currentPage !== "Home" && (
            <img
              src={}
              className="header-logo"
              width="300"
              height="125"
              alt="brewtique logo"
            />
          )}
        </div> */}

          {/* beans in nav bar - If it is on the home page only, beans will appear */}
          <div className="nav-wrapper ">
            <img
              src={beans}
              className="beans"
              width="80"
              height="40"
              alt="coffee beans"
            />

            <ul className="right nav-text">
              {/* BEANS */}
              {/* TODO Make sure it is on the home page only */}
              {/* <li className="nav-item ">
              <img
                src={beans}
                className="header-logo"
                width="80"
                height="40"
                alt="coffee beans"
              />
            </li> */}

              {/* HOME */}
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>

              {/*MY ACCOUNT  */}
              <li>
                <NavLink to="/myaccount">
                  My Account
                </NavLink>
              </li>

              {/* PRODUCTS  */}
              <li>
                <NavLink to="/products">
                  Shop
                </NavLink>
              </li>

              {/* LOGOUT */}
              {/* TODO update code to show if logged in only show the logged out button */}

              {/* TODO ensure that when you click logout, the session ends */}
              <li>
                <NavLink to="/">
                  Logout
                </NavLink>
              </li>

              {/* CART */}
              <li>
                <NavLink to="/cart">
                  <img
                    src={cart}
                    className="cart-icon"
                    width="45"
                    height="45"
                    alt="shopping cart"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
