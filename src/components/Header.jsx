import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Ensure the path is correct
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure FontAwesome is available

const Header = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  
  const toggleNavbar = () => setNavbarActive(!isNavbarActive);

  return (
    <header className={`header ${isNavbarActive ? "active" : ""}`}>
      {/* Overlay for mobile menu */}
      <div className="overlay" onClick={toggleNavbar}></div>

      {/* Header Top Section */}
      <div className="header-top">
        <div className="container">
          <a href="tel:+01123456790" className="helpline-box">
            <div className="icon-box">
              <i className="fas fa-phone-alt"></i> {/* FontAwesome phone icon */}
            </div>
            <div className="wrapper">
              <p className="helpline-title">For Further Inquiries :</p>
              <p className="helpline-number">+01 (123) 4567 90</p>
            </div>
          </a>

          {/* Logo */}
          <a href="/" className="logo">
            <img src={logo} alt="Tourly logo" />
          </a>

          {/* Header Buttons */}
          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search">
              <i className="fas fa-search"></i> {/* FontAwesome search icon */}
            </button>
            <button
              className="nav-open-btn"
              aria-label="Open Menu"
              onClick={toggleNavbar}
            >
              <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
