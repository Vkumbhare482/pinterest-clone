import React, { useState } from "react";

import "../pages/about.css";

import AboutNavbar from "../components/about/AboutNavbar";
import AboutDropdown from "../components/about/AboutDropdown";
import HeroSection from "../components/about/HeroSection";
import ContentSection from "../components/about/ContentSection";
import CardsSection from "../components/about/CardsSection";
import Footer from "../components/about/AboutFooter";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.jpg";
import hero10 from "../assets/hero10.jpg";
import hero11 from "../assets/hero11.jpg";
import hero12 from "../assets/hero12.jpg";

export default function AboutPage() {

  const [showMenu, setShowMenu] = useState(false);

  return (

    <div className="about-page">

      <AboutNavbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      {showMenu && <AboutDropdown />}

      <HeroSection
        hero1={hero1}
        hero2={hero2}
      />

      {/* BIG TEXT */}

      <section className="big-text-section">

        <h1>
          Pinterest is your space to
          find and explore what you
          actually like.
        </h1>

        <button>
          Sign up
        </button>

      </section>


      {/* CONTENT */}

      <ContentSection
        title="Find what inspires you"
        text="Explore visual ideas and discover inspiration."
        images={[hero3, hero4, hero5, hero6]}
      />

      <ContentSection
        reverse
        title="Tune your taste"
        text="See more of what you love and save your favourite Pins."
        image={hero7}
        button="Try visual search"
      />

      <ContentSection
        title="Bring your ideas to life"
        text="Turn inspiration into real life."
        image={hero8}
        shop
      />


      {/* CARDS */}

      <CardsSection
        cards={[
          {
            image: hero9,
            title: "Inspiration for every body",
          },
          {
            image: hero10,
            title: "Well-being online",
          },
          {
            image: hero11,
            title: "Teen safety tools",
          },
          {
            image: hero12,
            title: "See yourself searching",
          },
        ]}
      />

      <Footer />

    </div>
  );
}