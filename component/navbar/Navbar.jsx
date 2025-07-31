import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("About");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "head" },
    { name: "About", id: "aboutid" },
    { name: "Services", id: "servicesid" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (name) => {
    setActiveItem(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar bg-transparent">
      <div className="navbar-container bg-gray-900">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>

        {/* Desktop Navigation Items */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map(({ name, id }) => (
            <AnchorLink
              key={name}
              href={`#${id}`}
              offset="70"
              className={`anchor-link navbar-item ${
                activeItem === name ? "active" : ""
              }`}
              onClick={() => handleItemClick(name)}
            >
              {name}
            </AnchorLink>
          ))}
          
          {/* Mobile Contact Button (inside mobile menu) */}
          <AnchorLink
            href="#contactid"
            offset="50"
            className="anchor-link contact-button mobile-contact"
            onClick={() => handleItemClick("Contact")}
          >
            Contact us
          </AnchorLink>
        </div>

        {/* Desktop Contact Button */}
        <AnchorLink
          href="#contactid"
          offset="50"
          className="anchor-link contact-button desktop-contact"
          onClick={() => handleItemClick("Contact")}
        >
          Contact us
        </AnchorLink>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={toggleMobileMenu}>
            <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
              {navItems.map(({ name, id }) => (
                <AnchorLink
                  key={name}
                  href={`#${id}`}
                  offset="70"
                  className="mobile-nav-item"
                  onClick={() => handleItemClick(name)}
                >
                  {name}
                </AnchorLink>
              ))}
              <AnchorLink 
                href="#contactid"
                offset="50"
                className="mobile-contact-btn"
                onClick={() => handleItemClick("Contact")}
              >
                Contact Me
              </AnchorLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
