import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword as resetPasswordRequest } from "../services/authApi";
import { passwordChecks, isStrongPassword } from "../utils/passwordStrength";
import "./Auth.css";

const CHECK_LABELS = [
  ["length", "At least 8 characters"],
  ["uppercase", "One uppercase letter"],
  ["lowercase", "One lowercase letter"],
  ["number", "One number"],
  ["special", "One special character"],
];

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const checks = passwordChecks(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Missing or invalid reset link.");
      return;
    }
    if (!isStrongPassword(password)) {
      setError("Password does not meet the strength requirements below.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      await resetPasswordRequest(token, password);
      navigate("/login", { replace: true, state: { resetSuccess: true } });
    } catch (err) {
      setError(err.message || "Failed to reset password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Reset Password</h1>
        <p className="auth-subtitle">Choose a new password</p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            New Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <ul className="password-checklist">
            {CHECK_LABELS.map(([key, label]) => (
              <li key={key} className={checks[key] ? "met" : ""}>
                {checks[key] ? "✓" : "○"} {label}
              </li>
            ))}
          </ul>

          <label>
            Confirm New Password
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </label>

          <button className="auth-submit-btn" type="submit" disabled={submitting}>
            {submitting ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <p className="auth-footer-text">
          <Link to="/login">Back to Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
