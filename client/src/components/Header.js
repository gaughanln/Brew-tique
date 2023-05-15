import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Auth from "../utils/auth";
import { toast } from "react-toastify";
import M from "materialize-css";

// images
import brewtiqueSmall from "../assets/brewtiqueSmall.png";
import beans from "../assets/beans.png";
import cart from "../assets/cart.png";
import greenCart from "../assets/greenCart.png";

function Header() {
  const location = useLocation();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    toast.success("See ya later 👋🏼");
    console.log("user has been logged out");
  };

  useEffect(() => {
    // Initialize the Sidenav plugin
    const sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <>
      <nav
        style={{
          background: useLocation().pathname !== "/" ? "#1b4235" : "#edd3c5",
          color: useLocation().pathname !== "/" ? "black" : "red",
        }}
      >
        <div className="nav-wrapper">
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons coffee-cup">☕️</i>
          </a>
          {/* beans in nav bar - If it is on the home page only, beans will appear */}
          <div>
            {/* header logos */}
            <a className="brand-logo">
              <img
                src={useLocation().pathname === "/" ? beans : brewtiqueSmall}
                className={
                  useLocation().pathname === "/" ? "beans" : "header-logo"
                }
                width={useLocation().pathname === "/" ? 80 : 225}
                alt={
                  useLocation().pathname === "/"
                    ? "Coffee Beans"
                    : "brewtique logo"
                }
              />
            </a>

            <ul class="right hide-on-med-and-down">
              {/* HOME */}
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              {/* login */}
              {!Auth.loggedIn() && (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}

              {/* signup */}
              {!Auth.loggedIn() && (
                <li>
                  <NavLink to="/signup">Sign up</NavLink>
                </li>
              )}

              {/*MY ACCOUNT  */}
              {Auth.loggedIn() && (
                <li>
                  <NavLink to="/myaccount">My Account</NavLink>
                </li>
              )}

              {/* PRODUCTS  */}
              <li>
                <NavLink to="/products">Shop</NavLink>
              </li>

              {/* LOGOUT */}
              {Auth.loggedIn() && (
                <li>
                  <NavLink onClick={logout}>Logout</NavLink>
                </li>
              )}

              <li>
                {location.pathname !== "/" && (
                  <NavLink to="/cart">
                    <img
                      src={cart}
                      className="cart-icon"
                      width="45"
                      height="45"
                      alt="shopping cart"
                    />
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>


{/* mobile navbar */}
      <ul class="sidenav mobile" id="mobile-demo">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        {/* login */}
        {!Auth.loggedIn() && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}

        {/* signup */}
        {!Auth.loggedIn() && (
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        )}

        {/*MY ACCOUNT  */}
        {Auth.loggedIn() && (
          <li>
            <NavLink to="/myaccount">My Account</NavLink>
          </li>
        )}

        {/* PRODUCTS  */}
        <li>
          <NavLink to="/products">Shop</NavLink>
        </li>

        {/* LOGOUT */}
        {Auth.loggedIn() && (
          <li>
            <NavLink onClick={logout}>Logout</NavLink>
          </li>
        )}

        <li>
          <NavLink to="/cart">
            <img
              src={greenCart}
              className="cart-icon"
              width="45"
              height="45"
              alt="shopping cart"
            />
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;


