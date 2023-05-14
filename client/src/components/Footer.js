import React from "react";
import {  useLocation } from "react-router-dom";

// TODO I commented out the code because it's covering the page and CSS isn't acting right. Once we get all data flowing we can bring it back to work on fine details.

const Footer = () => {
          
  const location = useLocation();


  return (
    <footer className="page-footer valign-wrapper"
       style={{
          background: useLocation().pathname !== "/" ? "#1b4235" : "#edd3c5",
        }}>
      {/* <div className="container">
        <div className="row"> */}

          {/* <div className="col l6 s12">
            <h5 className="footer-text">About Us</h5>
            <p>
             We are Brew-tique, a small batch coffee roaster based in Houston, Texas. We specialize in 
             finding and curating the best niche coffee from around the world, so you can experience something new and exciting each month.
            </p>
            
          </div> */}

          {/* <div className="col l4 offset-l2 s12">
                <h5 className="footer-text">Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Main St</li>
              <li>Houston, USA 77001</li>
              <li>Email: support@Brewtique.com</li>
              <li>Phone: 713-9003-4352</li>
            </ul>
          </div> */}
          {/* <div className="col-lg-4 col-md-12 col-sm-12">
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
            </ul>  
              <li>
                <a href="#!">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
          </div> */}
        {/* </div>
        <div className="row">
          <div className="col-12 mt-3 mb-2 text-center"> */}
            <p className="text-muted text-center">&copy; 2023 Ecommerce, Inc. All rights reserved.</p>
          {/* </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
