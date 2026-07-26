import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../services/authApi";
import "./Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await forgotPassword(email);
    } finally {
      // Always show the same generic outcome, whether or not the account
      // exists — matches the backend's no-enumeration behavior.
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Forgot Password</h1>
        <p className="auth-subtitle">Enter your email and we'll send you a reset link</p>

        {submitted ? (
          <div className="auth-success">
            If that email is registered, a reset link has been sent.
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email Address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button className="auth-submit-btn" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}

        <p className="auth-footer-text">
          <Link to="/login">Back to Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
