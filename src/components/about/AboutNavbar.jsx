export default function AboutNavbar({
  showMenu,
  setShowMenu,
}) {

  return (

    <nav className="about-nav">

      {/* LEFT */}

      <div
        className="nav-left"
        onClick={() => setShowMenu(!showMenu)}
      >

        <div className="about-logo">
          P
        </div>

        <h3>About</h3>

        <span className="menu-icon">
          {showMenu ? "✕" : "☰"}
        </span>

      </div>


      {/* RIGHT */}

      <div className="nav-right">

        <button
          className="login-btn"
          onClick={() => window.location.href = "/login"}
        >
          Log in
        </button>

        <button
          className="signup-btn"
          onClick={() => window.location.href = "/signup"}
        >
          Sign up
        </button>

      </div>

    </nav>
  );
}