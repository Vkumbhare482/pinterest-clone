import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Login from "./loginPage";

import "./home.css";

// HERO IMAGES
import img1 from "../assets/charlota-blunarova-r5xHI_H44aM-unsplash.jpg";
import img3 from "../assets/dom-hill-nimElTcTNyY-unsplash.jpg";
import img4 from "../assets/kateryna-hliznitsova-ceSCZzjTReg-unsplash.jpg";
import img5 from "../assets/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg";
import img6 from "../assets/marissa-grootes-D4jRahaUaIc-unsplash.jpg";

// SECTION IMAGES
import sectionImg1 from "../assets/lipstick.png";
import sectionImg2 from "../assets/home.png";
import sectionImg3 from "../assets/makeup.png";

function Home() {

  const navigate = useNavigate();

  // LOGIN MODAL STATE
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar />

      <div className="home">

        {/* HERO */}
        <div className="hero">

          <div className="hero-left">
            <h1>Create the life you love on Pinterest</h1>

            <div className="hero-buttons">

              <button
                className="btn btn-danger rounded-pill px-4 py-2"
                onClick={() => navigate("/signup")}
              >
                Join Pinterest for free
              </button>

              <button
                className="btn btn-light rounded-pill px-4 py-2 border"
                onClick={() => setShowLogin(true)}
              >
                I already have an account
              </button>

            </div>
          </div>

          <div className="hero-right">
            <img src={img1} className="img img1" alt="" />
            <img src={img3} className="img main-img" alt="" />
            <img src={img4} className="img img4" alt="" />
            <img src={img5} className="img img5" alt="" />
            <img src={img6} className="img img6" alt="" />
          </div>

        </div>

        {/* SECTION 1 */}
        <div className="section">

          <div className="section-card">
            <img src={sectionImg1} alt="" className="card-image" />
          </div>

          <div className="section-text">
            <h2>Search by skin tone</h2>

            <p>
              Search with skin tone ranges for beauty ideas that represent you
            </p>

            <button
              className="btn btn-danger rounded-pill px-4"
              onClick={() => navigate("/explore")}
            >
              Try now
            </button>
          </div>

        </div>

        {/* SECTION 2 */}
        <div className="section reverse">

          <div className="section-card">
            <img src={sectionImg2} alt="" className="card-image" />
          </div>

          <div className="section-text">
            <h2>Collaborate with group boards</h2>

            <p>
              Visualise your ideas with others using a Pinterest account
            </p>

            <button
              className="btn btn-danger rounded-pill px-4"
              onClick={() => navigate("/business")}
            >
              See an example
            </button>
          </div>

        </div>

        {/* SECTION 3 */}
        <div className="section">

          <div className="section-card">
            <img src={sectionImg3} alt="" className="card-image" />
          </div>

          <div className="section-text">
            <h2>Search visually with images</h2>

            <p>
              Search for objects within an image to find more styles you’ll love
            </p>

            <button
              className="btn btn-danger rounded-pill px-4"
              onClick={() => navigate("/create")}
            >
              Learn more
            </button>
          </div>

        </div>

      </div>

      <Footer />

      {/* LOGIN MODAL */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}

    </>
  );
}

export default Home;