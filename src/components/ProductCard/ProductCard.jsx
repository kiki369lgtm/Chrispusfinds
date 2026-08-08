import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaStar, FaShoppingCart, FaEye, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const images = product.image_urls?.length ? product.image_urls : [];
  const hasMultipleImages = images.length > 1;

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

  const showPrevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((i) => (i - 1 + images.length) % images.length);
  };

  const showNextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((i) => (i + 1) % images.length);
  };

  const goToImage = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage(index);
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
          src={images[currentImage] || "/images/placeholder.jpg"}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg";
          }}
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="image-nav-btn image-nav-prev"
              onClick={showPrevImage}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="image-nav-btn image-nav-next"
              onClick={showNextImage}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
            <div className="image-dots">
              {images.map((url, index) => (
                <button
                  key={url}
                  type="button"
                  className={`image-dot ${index === currentImage ? "active" : ""}`}
                  onClick={(e) => goToImage(e, index)}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

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
            <span className="price-label">Weekly:</span>
            <span className="price-value monthly">{formatPrice(product.weekly_installment)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;