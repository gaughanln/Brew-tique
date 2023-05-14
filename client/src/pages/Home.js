import React from "react";
import { Link } from "react-router-dom";
import homePhoto from "../assets/homePhoto.png";
import brewtiqueLarge from "../assets/brewtiqueLarge.png";

// TODO

// CSS - want header cream color for this page only
// handle page change needs updating - does it though?

function Home() {
  return (
    <>
      <div className="row home valign-wrapper">
        <div className="col s6 center-align ">
          <img
            src={brewtiqueLarge}
            className="brew-large"
            alt="Cup of coffee"
          />
          <p className="home-text">
            At Brewtique, we specialize in finding and curating the best niche
            coffee from around the world, so you can experience something new
            and exciting each morning!
          </p>

          <Link className="btn-large waves-effect clay-btn" to="/products">
            {" "}
            Shop now!{" "}
          </Link>
        </div>

        <div className="col s6 center-align">
          <img src={homePhoto} className="home-photo" alt="Cup of coffee" />
        </div>
      </div>
    </>
  );
}

export default Home;
