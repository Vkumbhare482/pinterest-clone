import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-overlay">

      <div className="login-container">

        {/* CLOSE BUTTON */}
        <button
          className="close-btn"
          onClick={() => navigate("/")}
        >
          ×
        </button>

        {/* LOGO */}
        <img
          src="/download.png"
          alt="Pinterest"
          className="login-logo"
        />

        {/* TITLE */}
        <h1>Welcome to Pinterest</h1>

        {/* EMAIL */}
        <label>Email address</label>

        <input
          type="email"
          placeholder="Email"
        />

        {/* PASSWORD */}
        <label>Password</label>

        <input
          type="password"
          placeholder="Password"
        />

        {/* FORGOT */}
        <p className="forgot-password">
          Forgotten your password?
        </p>

        {/* LOGIN BUTTON */}
        <button className="login-btn">
          Log in
        </button>

        {/* OR */}
        <div className="divider">OR</div>

        {/* GOOGLE */}
        <button className="google-btn">
          Continue with Google
        </button>

        {/* FACEBOOK */}
        <button className="facebook-btn">
          Continue with Facebook
        </button>

        {/* TERMS */}
        <p className="terms">
          By continuing, you agree to Pinterest's Terms of Service
          and acknowledge you've read our Privacy Policy.
        </p>

        {/* SIGNUP */}
        <p className="signup-text">
          Not on Pinterest yet?{" "}

          <span onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;