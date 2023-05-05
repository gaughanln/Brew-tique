import React from "react";
import Header from '../components/Header'
import homePhoto from "../assets/homePhoto.png";

// TODO
// pathing
// CSS
// handle page change needs updating

function Home({ handlePageChange }) {
    const handlePageChange = (page) => setCurrentPage(page);

  console.log("is this showing up?");
  return (
    <>

      <h1> Brewtique</h1>
      <p>
        At Brewtique, we specialize in finding and curating the best niche
        coffee from around the world, so you can experience something new and
        exciting each month
      </p>

      <a
        className="nav-link rounded-pill"
        href="#products"
        onClick={() => handlePageChange("Products")}
      > Shop </a>

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
