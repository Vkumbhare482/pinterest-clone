import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg px-5 py-3"
      style={{
        background: "#f5f5f5",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid">

        {/* LEFT */}
        <div className="d-flex align-items-center gap-2">

          {/* Logo */}
          <Link to="/" className="text-decoration-none">
            <img
              src="/download.png"
              alt="logo"
              style={{
                width: "35px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </Link>

          {/* Pinterest Text */}
          <Link
            to="/"
            className="text-decoration-none"
            style={{
              color: "#E60023",
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            Pinterest
          </Link>

          {/* Explore */}
          <Link
            to="/explore"
            className="text-dark fw-semibold text-decoration-none ms-3"
          >
            Explore
          </Link>
        </div>

        {/* RIGHT */}
        <div className="d-flex align-items-center gap-4 ms-auto">

          <Link
            to="/about"
            className="text-dark text-decoration-none"
          >
            About
          </Link>

          <Link
            to="/business"
            className="text-dark text-decoration-none"
          >
            Businesses
          </Link>

          <Link
            to="/create"
            className="text-dark text-decoration-none"
          >
            Create
          </Link>

          <Link
            to="/news"
            className="text-dark text-decoration-none"
          >
            News
          </Link>

          <Link to="/login">
            <button className="btn btn-danger rounded-pill px-4">
              Log in
            </button>
          </Link>

          <Link to="/signup">
            <button className="btn btn-light rounded-pill px-4 border">
              Sign up
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;