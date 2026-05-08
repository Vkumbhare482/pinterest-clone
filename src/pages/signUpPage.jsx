// src/pages/SignupPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPinterest, FaGoogle, FaEye } from "react-icons/fa";
import "./signup.css";

export default function SignupPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-overlay">
      <div className="signup-modal">

        {/* CLOSE BUTTON */}
        <button
          className="close-btn"
          onClick={() => navigate("/")}
        >
          ×
        </button>

        {/* LOGO */}
        <div className="logo-box">
          <FaPinterest className="pinterest-logo" />
        </div>

        {/* TITLE */}
        <h1>Welcome to Pinterest</h1>
        <p className="subtitle">Find new ideas to try</p>

        {/* FORM */}
        <form className="signup-form">

          <div className="input-group">
            <label>Email address</label>
            <input type="email" placeholder="Email address" />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
              />

              <FaEye
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <span className="small-text">
              Use 8 or more letters, numbers and symbols
            </span>
          </div>

          <div className="input-group">
            <label>Date of birth</label>
            <input type="text" placeholder="08 / 05 / 2026" />
          </div>

          <button className="continue-btn">
            Continue
          </button>

          <div className="or-text">OR</div>

          <button className="google-btn">
            <FaGoogle />
            Continue with Google
          </button>

          <p className="terms">
            By continuing, you agree to Pinterest's
            Terms of Service and acknowledge that
            you've read our Privacy Policy.
          </p>

          <p className="login-text">
            Already a member? <span>Log in</span>
          </p>
        </form>

        {/* FOOTER */}
        <div className="business-box">
          Create a free business account
        </div>
      </div>
    </div>
  );
}