import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaStar, FaShoppingCart, FaCheck, FaTruck, FaShieldAlt, FaUndo } from "react-icons/fa";
import { getProductById, formatPrice } from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <Link to="/categories" className="back-btn">Browse All Products</Link>
      </div>
    );
  }

  const totalInstallment = product.deposit + (product.monthlyInstallment * product.installmentMonths);

  return (
    <div className="product-detail-page">
      <div className="detail-container">
        {/* Left: Image Gallery */}
        <div className="detail-gallery">
          <div className="main-image-wrapper">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="detail-info">
          <h1 className="detail-title">{product.name}</h1>
          
          <div className="detail-rating">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(product.rating) ? "star-filled" : "star-empty"} />
            ))}
            <span>{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="detail-short-desc">{product.description}</p>

          {/* Pricing Section */}
          <div className="detail-pricing">
            <h3>Choose Your Payment Plan</h3>
            
            <div className="pricing-option cash-option">
              <div className="option-header">
                <FaCheck className="check-icon" />
                <span className="option-name">Cash Price</span>
              </div>
              <span className="option-price">{formatPrice(product.cashPrice)}</span>
              <span className="option-save">Save {formatPrice(totalInstallment - product.cashPrice)}</span>
            </div>

            <div className="pricing-option installment-option">
              <div className="option-header">
                <span className="option-name">Pay in Installments</span>
              </div>
              <div className="installment-breakdown">
                <div className="breakdown-row">
                  <span>Deposit:</span>
                  <span>{formatPrice(product.deposit)}</span>
                </div>
                <div className="breakdown-row">
                  <span>Monthly:</span>
                  <span>{formatPrice(product.monthlyInstallment)}</span>
                </div>
                <div className="breakdown-row">
                  <span>Duration:</span>
                  <span>{product.installmentMonths} months</span>
                </div>
                <div className="breakdown-row total">
                  <span>Total:</span>
                  <span>{formatPrice(totalInstallment)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Color Selection */}
          {product.fullDetails?.colors && (
            <div className="color-selection">
              <label>Color:</label>
              <div className="color-options">
                {product.fullDetails.colors.map((color, index) => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === index ? "active" : ""}`}
                    onClick={() => setSelectedColor(index)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="quantity-selector">
            <label>Quantity:</label>
            <div className="qty-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="detail-actions">
            <button className="btn-add-cart" onClick={() => addToCart({...product, quantity})}>
              <FaShoppingCart />
              Add to Cart
            </button>
            <button className="btn-wishlist">
              <FaHeart /> Save
            </button>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="badge">
              <FaTruck />
              <span>Free Delivery</span>
            </div>
            <div className="badge">
              <FaShieldAlt />
              <span>{product.fullDetails?.warranty || "1 Year Warranty"}</span>
            </div>
            <div className="badge">
              <FaUndo />
              <span>7-Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="detail-tabs">
        <div className="tab-headers">
          <button 
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button 
            className={activeTab === "specifications" ? "active" : ""}
            onClick={() => setActiveTab("specifications")}
          >
            Specifications
          </button>
          <button 
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <div className="tab-panel">
              <p>{product.description}</p>
              <p>Experience cutting-edge technology with the {product.name}. 
              Designed for performance and style, this device offers exceptional 
              features that meet all your needs.</p>
            </div>
          )}

          {activeTab === "specifications" && product.fullDetails && (
            <div className="tab-panel">
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.fullDetails).map(([key, value]) => (
                    Array.isArray(value) ? (
                      <tr key={key}>
                        <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                        <td>{value.join(", ")}</td>
                      </tr>
                    ) : (
                      <tr key={key}>
                        <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                        <td>{value}</td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="tab-panel">
              <p>Customer reviews coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;