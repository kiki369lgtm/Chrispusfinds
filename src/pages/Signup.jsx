import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { googleLoginUrl } from "../services/authApi";
import { passwordChecks, isStrongPassword } from "../utils/passwordStrength";
import "./Auth.css";

const CHECK_LABELS = [
  ["length", "At least 8 characters"],
  ["uppercase", "One uppercase letter"],
  ["lowercase", "One lowercase letter"],
  ["number", "One number"],
  ["special", "One special character"],
];

const Signup = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const checks = passwordChecks(form.password);
  const passwordsMatch = form.password && form.password === form.confirmPassword;

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isStrongPassword(form.password)) {
      setError("Password does not meet the strength requirements below.");
      return;
    }
    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      await register(form);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || (err.errors && err.errors[0]) || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-subtitle">Join us and start shopping</p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form-row">
            <label>
              First Name
              <input type="text" value={form.firstName} onChange={update("firstName")} required />
            </label>
            <label>
              Last Name
              <input type="text" value={form.lastName} onChange={update("lastName")} required />
            </label>
          </div>
          <label>
            Email Address
            <input type="email" value={form.email} onChange={update("email")} required />
          </label>
          <label>
            Phone Number
            <input type="tel" value={form.phoneNumber} onChange={update("phoneNumber")} placeholder="+254712345678" required />
          </label>
          <label>
            Password
            <input type="password" value={form.password} onChange={update("password")} required />
          </label>

          <ul className="password-checklist">
            {CHECK_LABELS.map(([key, label]) => (
              <li key={key} className={checks[key] ? "met" : ""}>
                {checks[key] ? "✓" : "○"} {label}
              </li>
            ))}
          </ul>

          <label>
            Confirm Password
            <input type="password" value={form.confirmPassword} onChange={update("confirmPassword")} required />
          </label>

          <button className="auth-submit-btn" type="submit" disabled={submitting}>
            {submitting ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <a className="auth-google-btn" href={googleLoginUrl}>
          <FaGoogle />
          Continue with Google
        </a>

        <p className="auth-footer-text">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
