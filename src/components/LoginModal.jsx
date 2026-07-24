import "./LoginModal.css";
import { FaGoogle, FaTimes } from "react-icons/fa";

function LoginModal({ onClose }) {
  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="login-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        <h2>Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-email-btn">
            Sign up with Email
          </button>
        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <button className="login-google-btn" type="button">
          <FaGoogle />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
