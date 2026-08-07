import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import "./CartDropdown.css";

const CartDropdown = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.cash_price) * item.quantity,
    0
  );

  return (
    <div className="cart-dropdown">
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                  onError={(e) => {
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-qty">Qty: {item.quantity}</span>
                </div>
                <span className="cart-item-price">
                  {formatPrice(Number(item.cash_price) * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
