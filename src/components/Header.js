import React, { useState } from "react";
import "./Header.css";
import { Search, ShoppingCart, User } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">ShopFlow</div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
      </nav>

      {/* Icons (Hidden on mobile) */}
      <div className="icons">
        <Search className="icon" />
        <User className="icon" />
        <div className="cart-icon">
          <ShoppingCart className="icon" />
          <span className="cart-count">3</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
