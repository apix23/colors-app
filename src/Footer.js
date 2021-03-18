import React from "react";
import "./Footer.css";
import MultiplicaTalent from "./images/multiplicaTalentLogo.png";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <a href="https://www.multiplicatalent.com/">
        <img src={MultiplicaTalent} alt="" />
      </a>
      <p>
        and created by{" "}
        <a
          href="https://www.sanchezalejandrodev.com"
          className="text-decoration-none"
        >
          Alejandro Sanchez
        </a>
      </p>
    </footer>
  );
};

export default Footer;
