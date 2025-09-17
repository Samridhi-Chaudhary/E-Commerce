import "./Header.css";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">ShopFlow</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <a href="#">Categories</a>
        <a href="#">About</a>
      </nav>
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
