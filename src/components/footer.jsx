// Footer.jsx

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pinterest-footer">
      <div className="pinterest-footer-container">

        {/* LEFT */}

        <div className="pinterest-footer-left">
          <h1 className="pinterest-footer-logo">
            Pinterest
          </h1>

          <p className="pinterest-footer-copy">
            © 2026 Pinterest
          </p>
        </div>

        {/* RIGHT */}

        <div className="pinterest-footer-right">

          <div className="pinterest-footer-column">
            <h3>Get the app</h3>

            <a href="/">iOS</a>
            <a href="/">Android</a>
          </div>

          <div className="pinterest-footer-column">
            <h3>Quick links</h3>

            <a href="/">Explore</a>
            <a href="/">Shop</a>
            <a href="/">Users</a>
            <a href="/">Collections</a>
            <a href="/">Shopping</a>
            <a href="/">Help Centre</a>
          </div>

          <div className="pinterest-footer-column">
            <h3>Policies</h3>

            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Non-user notice</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;