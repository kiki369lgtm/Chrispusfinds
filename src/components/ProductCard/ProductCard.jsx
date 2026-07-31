import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewDetail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist Button */}
      <button
        className={`wishlist-btn ${isLiked ? "liked" : ""}`}
        onClick={() => setIsLiked(!isLiked)}
      >
        <FaHeart />
      </button>

      {/* Product Image - clickable to view detail */}
      <div className="product-image-wrapper" onClick={handleViewDetail}>
        <img
          src={product.image_url}
          alt={product.name}
          className="product-image"
        />
        
        {/* Hover Overlay with Actions */}
        <div className={`product-overlay ${isHovered ? "visible" : ""}`}>
          <button 
            className="overlay-btn add-cart-btn" 
            onClick={handleAddToCart}
            type="button"
          >
            <FaShoppingCart />
            <span>ADD TO CART</span>
          </button>
          <button 
            className="overlay-btn view-detail-btn"
            onClick={handleViewDetail}
            type="button"
          >
            <FaEye />
            <span>VIEW DETAIL</span>
          </button>
        </div>
      </div>

      {/* Product Info - clickable title */}
      <div className="product-info">
        <h3 className="product-name" onClick={handleViewDetail}>
          {product.name}
        </h3>
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.floor(product.rating ?? 0) ? "star-filled" : "star-empty"}
            />
          ))}
          <span className="rating-text">({product.rating ?? "N/A"})</span>
        </div>

        {/* Three Pricing Options */}
        <div className="product-pricing">
          <div className="price-row">
            <span className="price-label">Cash Price:</span>
            <span className="price-value cash">{formatPrice(product.cash_price)}</span>
          </div>
          <div className="price-row">
            <span className="price-label">Deposit:</span>
            <span className="price-value deposit">{formatPrice(product.deposit)}</span>
          </div>
          <div className="price-row">
            <span className="price-label">Daily:</span>
            <span className="price-value monthly">{formatPrice(product.daily_installment)}</span>
            <span className="installment-terms">x {product.installment_months} months</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;