import React from "react";
import brewtiqueSmall from "../assets/brewtiqueSmall.png";
import beans from "../assets/beans.png";
import cart from "../assets/cart.png";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar sticky-top navbar- pt-3 ">
        {/* company name logo in nav bar - If it isn't on the home page, this will appear */}
        <div className="navbar-brand">
          {currentPage !== "Home" && (
            <img
              src={brewtiqueSmall}
              className="header-logo"
              width="300"
              height="125"
              alt="brewtique logo"
            />
          )}
        </div>

        <div className="navbar-brand">
          {currentPage === "Home" && (
            <img
              src={beans}
              className="header-logo"
              width="300"
              height="125"
              alt="coffee beans"
            />
          )}
        </div>

        <ul className="nav justify-content-center ">
          
          {/* home */}
          <li className="nav-item ">
            <a
              className="nav-link active rounded-pill"
              aria-current="true"
              href="#home"
              onClick={() => handlePageChange("Home")}
            >
              Home
            </a>
          </li>

          {/* my account  */}
          <li className="nav-item">
            <a
              className="nav-link rounded-pill"
              href="#user"
              onClick={() => handlePageChange("User")}
            >  My Account </a>
          </li>


            {/* products  */}
            <li className="nav-item">
            <a
              className="nav-link rounded-pill"
              href="#products"
              onClick={() => handlePageChange("Products")}
            > Shop </a>
          </li>

          {/* cart */}

          <li className="nav-item">
            <a
              className="nav-link rounded-pill"
              href="#cart"
              onClick={() => handlePageChange("Cart")}
            >
              <img
                src={cart}
                className="cart-icon"
                width="300"
                height="125"
                alt="shopping cart"
              />
            </a>
          </li>

          {/* logout */}
          {/* update code to show if logged in only show the logged out button */}

          <li className="nav-item">
            <a
              className="nav-link resume rounded-pill"
              href="#home"
              onClick={() => handlePageChange("Home")}
            >
              {" "}
              logout{" "}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
