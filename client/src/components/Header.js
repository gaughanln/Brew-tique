import React from "react";
import brewtiqueSmall from "../assets/brewtiqueSmall.png";
import beans from "../assets/beans.png";
import cart from "../assets/cart.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Auth from "../utils/auth";
import { toast } from "react-toastify";

// TODO if time, add mobile collapse

function Header() {

  const navigate = useNavigate();
  const location = useLocation();

  // how do we implement LOGOUT_USER mutation?

  // const handleLogout = () => {
  //   localStorage.removeItem("id_token");
  //   navigate("/");
  //   console.log("user has been logged out")

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    toast.success("See ya later 👋🏼")
    console.log("user has been logged out")
  };


  return (
    <>
      <div className="navbar-fixed">
        <nav style={{
          background: useLocation().pathname !== "/" ? "#1b4235" : "#edd3c5",
          color: useLocation().pathname !== "/" ? "black" : "red"
        }}>

          {/* beans in nav bar - If it is on the home page only, beans will appear */}
          <div>
        {/* header logos */}
            <img
              src={useLocation().pathname === "/" ? beans : brewtiqueSmall}
              className={useLocation().pathname === "/" ? "beans" : "header-logo"}
              width={useLocation().pathname === "/" ? 80 : 225}
              height={useLocation().pathname === "/" ? 50 : 50}
              alt={useLocation().pathname === "/" ? "Coffee Beans" : "brewtique logo"}
            />

            <ul className="right">
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
        {/* TODO ensure that when you click logout, the session ends */}
              {Auth.loggedIn() && (
                <li>
                  <NavLink onClick={logout}>Logout</NavLink>
                </li>
              )}

              <li>
              {location.pathname !== '/' && (
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
        </nav>
      </div>
    </>
  );
}

export default Header;
