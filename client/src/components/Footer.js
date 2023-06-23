import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className=" "
      style={{
        background: useLocation().pathname !== "/" ? "#1b4235" : "#edd3c5",
      }}
    >
      <p className="foot">Contact Us | 281.330.8004</p>
    </footer>
  );
};

export default Footer;
