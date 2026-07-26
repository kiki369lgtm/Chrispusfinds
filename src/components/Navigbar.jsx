import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navigbar.css";
import logo from "../assets/Rehoboth.jpg";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";
import CartDropdown from "./CartDropdown";
import useClickOutside from "./userClickOutside";  // Flat structure — same folder
import { useCart } from "../context/CartContext";
import { useAuth } from "../hooks/useAuth";
function Navigbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const navRef = useRef(null);
  const cartRef = useRef(null);
  const { cartCount } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  useClickOutside(navRef, () => setActiveMenu(null));
  useClickOutside(cartRef, () => setShowCart(false));

  const goToAccount = () => navigate(user ? "/account" : "/login");

  const handleSearch = ({ query, category }) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);
    navigate(`/search?${params.toString()}`);
  };

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
            <SearchBar onSearch={handleSearch} />
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
              onClick={goToAccount}
            >
              <FaUser />
            </button>
            <span className="login-text" onClick={goToAccount}>
              {user ? user.first_name : "Log in"}
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
    </header>
  );
}

export default Navigbar;