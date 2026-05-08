import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{
        /* FIXED FULL WIDTH */
        width: "100%",
        height: "64px",

        /* REMOVE ALL EXTRA SPACES */
        margin: "0",
        padding: "0 16px",

        /* STICKY TOP */
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",

        background: "white",
        zIndex: "99999",

        boxShadow: "0 1px 5px rgba(0,0,0,0.08)",
      }}
    >
      {/* LEFT */}
      <div
        className="d-flex align-items-center"
        style={{
          gap: "14px",
        }}
      >
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="d-flex align-items-center"
          style={{
            gap: "6px",
            cursor: "pointer",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            alt="Pinterest"
            style={{
              width: "28px",
              height: "28px",
            }}
          />

          <span
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#e60023",
            }}
          >
            Pinterest
          </span>
        </div>

        {/* EXPLORE */}
        <button
          onClick={() => navigate("/explore")}
          className="btn"
          style={{
            border: "none",
            background: "transparent",
            fontSize: "16px",
            fontWeight: "500",
            padding: "6px 10px",
            boxShadow: "none",
          }}
        >
          Explore
        </button>
      </div>

      {/* SEARCH */}
      <div
        className="d-flex align-items-center flex-grow-1"
        style={{
          height: "42px",
          background: "#e9e9e6",
          borderRadius: "999px",

          marginLeft: "18px",
          marginRight: "18px",

          padding: "0 14px",
        }}
      >
        <span
          style={{
            fontSize: "17px",
            color: "#666",
            marginRight: "10px",
          }}
        >
          ⌕
        </span>

        <input
          type="text"
          placeholder="Search for easy dinners, fashion, etc."
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: "16px",
          }}
        />
      </div>

      {/* RIGHT */}
      <div
        className="d-flex align-items-center"
        style={{
          gap: "10px",
        }}
      >
        {/* LOGIN */}
        <button
          onClick={() => navigate("/login")}
          className="btn"
          style={{
            background: "#efefef",
            border: "none",
            borderRadius: "999px",
            padding: "10px 18px",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Log in
        </button>

        {/* SIGNUP */}
        <button
          onClick={() => navigate("/signup")}
          className="btn"
          style={{
            background: "#e60023",
            color: "white",
            border: "none",
            borderRadius: "999px",
            padding: "10px 18px",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;