import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navigbar.css";
import logo from "../assets/Rehoboth.jpg";
import SearchBar from "./Searchbar";        // Note: your file is "Searchbar.jsx" not "SearchBar.jsx"
import LoginModal from "./LoginModal";
import MegaMenu from "./MegaMenu";
import CartDropdown from "./CartDropdown";
import useClickOutside from "./userClickOutside";  // Flat structure — same folder
import { useCart } from "../context/CartContext";
function Navigbar({ onSearch }) {
  const [showLogin, setShowLogin] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const navRef = useRef(null);
  const cartRef = useRef(null);
  const { cartCount } = useCart();
  useClickOutside(navRef, () => setActiveMenu(null));
  useClickOutside(cartRef, () => setShowCart(false));

  return (
    <header className="navbar-header" ref={navRef}>
      {/* Top Bar: Logo + Search + Actions */}
      <div className="navbar-top">
        <div className="navbar-container">
          {/* Left - Logo */}
          <Link to="/" className="navbar-left">
            <img src={logo} alt="Rehoboth Enterprise Logo" className="logo" />
          </Link>

          {/* Center - Search */}
          <div className="navbar-center">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Right - Icons */}
          <div className="navbar-right">
            <button className="action-btn" aria-label="Wishlist">
              <FaHeart />
            </button>
            <div className="cart-wrapper" ref={cartRef}>
              <button
                className="action-btn cart-btn"
                aria-label="Cart"
                onClick={() => setShowCart((prev) => !prev)}
              >
                <FaShoppingCart />
                <span className="cart-badge">{cartCount}</span>
              </button>
              {showCart && <CartDropdown />}
            </div>
            <button 
              className="action-btn" 
              aria-label="Account"
              onClick={() => setShowLogin(true)}
            >
              <FaUser />
            </button>
            <span className="login-text" onClick={() => setShowLogin(true)}>
              Log in
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Mega Menu */}
      <div className="navbar-bottom">
        <div className="navbar-container">
          <MegaMenu
            activeMenu={activeMenu}
            onHover={setActiveMenu}
            onLeave={() => setActiveMenu(null)}
          />
        </div>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </header>
  );
}

export default Navigbar;