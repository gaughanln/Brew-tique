import React from "react";
import {  useLocation } from "react-router-dom";

// TODO I commented out the code because it's covering the page and CSS isn't acting right. Once we get all data flowing we can bring it back to work on fine details.

const Footer = () => {
          
  const location = useLocation();


  return (
    <footer className="valign-wrapper" style={{
          background: useLocation().pathname !== "/" ? "#1b4235" : "#edd3c5",
        }}>
      <div className="row">
        <div className="col l6 s12 about">
          <h5>About Us</h5>
          <p>Finding and curating the best niche coffee from around the world, so you can experience something new and exciting each month.
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Email: support@Brewtique.com</li>
            <li>Phone: 281.330.8004</li>
          </ul>
        </div>
      </div>
        <div className="row">
          <div className="col-12 mt-3 mb-2 text-center">
            <p className="text-muted text-center">&copy; 2023 Ecommerce, Inc. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
