import React from "react";
import { Link } from 'react-router-dom';
import homePhoto from "../assets/homePhoto.png";

// TODO
// pathing
// CSS
// handle page change needs updating

function Home() {
  

  console.log("is this showing up?");
  return (
    <>

      <h1> Brewtique</h1>
      <p>
        At Brewtique, we specialize in finding and curating the best niche
        coffee from around the world, so you can experience something new and
        exciting each month
      </p>


      <Link
        className="nav-link rounded-pill"to="/products" > Shop </Link>

{/* <a
        className="nav-link rounded-pill"
        href="#about"
        onClick={() => handlePageChange("about")}
      > How it works </a> */}
   

      <img src={homePhoto} alt="Cup of coffee" />
    </>
  );
}

export default Home;
