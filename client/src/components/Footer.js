import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              velit non sapien rhoncus imperdiet.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Main St</li>
              <li>Houston, USA 77001</li>
              <li>Email: support@Brewtique.com</li>
              <li>Phone: 713-9003-4352</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
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
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3 mb-2 text-center">
            <p className="text-muted">&copy; 2023 Ecommerce, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
