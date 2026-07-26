import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Auth.css";

const Account = () => {
  const { user, logout, authFetch } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(user);

  useEffect(() => {
    authFetch("/users/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProfile(data.data);
      })
      .catch(() => {
        // Keep showing the context's cached user on failure.
      });
  }, [authFetch]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (!profile) return null;

  return (
    <div className="auth-page">
      <div className="auth-card">
        {profile.profile_picture && (
          <img src={profile.profile_picture} alt="" className="account-profile-picture" />
        )}
        <h1>{profile.first_name} {profile.last_name}</h1>
        <p className="auth-subtitle">My Account</p>

        <div className="account-fields">
          <div className="account-field">
            <span>Email</span>
            <span>{profile.email}</span>
          </div>
          <div className="account-field">
            <span>Phone</span>
            <span>{profile.phone_number || "—"}</span>
          </div>
          <div className="account-field">
            <span>Signed in with</span>
            <span>{profile.auth_provider === "google" ? "Google" : "Email"}</span>
          </div>
          <div className="account-field">
            <span>Email verified</span>
            <span>{profile.email_verified ? "Yes" : "No"}</span>
          </div>
        </div>

        <button className="auth-logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Account;
