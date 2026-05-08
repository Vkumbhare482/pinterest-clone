// Explore.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./explore.css";
import Navbar from "../components/ExploreNav";

// TOP CARDS IMAGES
import wedding from "../assets/weddingjewellery.jpg";
import mehendi from "../assets/mehendi.jpg";
import recipes from "../assets/fibrefood.jpg";

// CATEGORY IMAGES
import animals from "../assets/animal.jpg";
import art from "../assets/art.jpg";
import beauty from "../assets/beauty.jpg";
import design from "../assets/design.jpg";
import diy from "../assets/diyandcrafts.jpg";
import food from "../assets/foodanddrink.jpg";
import decor from "../assets/homedecor.jpg";
import fashion from "../assets/mensfashion.jpg";
import quotes from "../assets/quotes.jpg";
import tattoos from "../assets/tattoos.jpg";

const featuredCards = [
  {
    id: 1,
    title: "Wedding jewellery styling",
    subtitle: "Big day bling",
    image: wedding,
    link: "/category/wedding",
  },
  {
    id: 2,
    title: "Unexpected mehendi designs",
    subtitle: "Make it cool",
    image: mehendi,
    link: "/category/mehendi",
  },
  {
    id: 3,
    title: "High fiber recipes",
    subtitle: "Glow from within",
    image: recipes,
    link: "/category/recipes",
  },
];

const categories = [
  {
    id: 1,
    title: "Animals",
    image: animals,
    link: "/category/animals",
  },
  {
    id: 2,
    title: "Art",
    image: art,
    link: "/category/art",
  },
  {
    id: 3,
    title: "Beauty",
    image: beauty,
    link: "/category/beauty",
  },
  {
    id: 4,
    title: "Design",
    image: design,
    link: "/category/design",
  },
  {
    id: 5,
    title: "DIY And Crafts",
    image: diy,
    link: "/category/diy",
  },
  {
    id: 6,
    title: "Food And Drink",
    image: food,
    link: "/category/food",
  },
  {
    id: 7,
    title: "Home Decor",
    image: decor,
    link: "/category/decor",
  },
  {
    id: 8,
    title: "Mens Fashion",
    image: fashion,
    link: "/category/fashion",
  },
  {
    id: 9,
    title: "Quotes",
    image: quotes,
    link: "/category/quotes",
  },
  {
    id: 10,
    title: "Tattoos",
    image: tattoos,
    link: "/category/tattoos",
  },
];

export default function Explore() {
  const [pins, setPins] = useState([]);

  // FETCH RANDOM IMAGES
  const fetchPins = async () => {
    try {
      const res = await fetch(
        "https://api.unsplash.com/photos/random?count=20&client_id=hDPOYw1djGeI_ghLMVsrbkBfgf5T8ePwZSVV_wR7giQ"
      );

      const data = await res.json();

      const formattedPins = data.map((item) => ({
        id: item.id,

        image: item.urls.regular,

        title:
          item.alt_description ||
          "Beautiful Pinterest Inspiration",

        user: item.user.name,

        height: [
          "260px",
          "320px",
          "420px",
          "500px",
          "360px",
        ][Math.floor(Math.random() * 5)],
      }));

      setPins((prev) => [...prev, ...formattedPins]);
    } catch (err) {
      console.log(err);
    }
  };

  // INITIAL LOAD
  useEffect(() => {
    fetchPins();
  }, []);

  // INFINITE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        fetchPins();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="explore-page">
      <Navbar />

      <div style={{ paddingTop: "64px" }}>
        {/* FEATURED SECTION */}
        <section className="featured-section">
          <h1>Explore the best of Pinterest</h1>

          <div className="featured-grid">
            {featuredCards.map((card) => (
              <Link
                to={card.link}
                className="featured-card"
                key={card.id}
              >
                <img src={card.image} alt={card.title} />

                <div className="overlay">
                  <p>{card.subtitle}</p>
                  <h2>{card.title}</h2>
                </div>
              </Link>
            ))}
          </div>

          <button className="see-more-btn">
            See more
          </button>
        </section>

        {/* CATEGORY SECTION */}
        <section className="category-section">
          <h1>Browse by category</h1>

          <div className="category-grid">
            {categories.map((item) => (
              <Link
                to={item.link}
                className="category-card"
                key={item.id}
              >
                <img src={item.image} alt={item.title} />

                <div className="category-overlay">
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <button className="see-more-btn">
            See more
          </button>
        </section>

        {/* NEW PINTEREST FEED SECTION */}
        <section
          style={{
            padding: "40px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              marginBottom: "35px",
            }}
          >
            What's new on Pinterest
          </h1>

          {/* MASONRY GRID */}
          <div
            style={{
              columnCount: 5,
              columnGap: "18px",
            }}
          >
            {pins.map((pin) => (
              <div
                key={pin.id}
                style={{
                  breakInside: "avoid",
                  marginBottom: "18px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {/* IMAGE */}
                <img
                  src={pin.image}
                  alt={pin.title}
                  style={{
                    width: "100%",
                    height: pin.height,
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />

                {/* OVERLAY */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    padding: "16px",
                    borderRadius: "20px",

                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",

                    color: "white",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {pin.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      margin: "0",
                    }}
                  >
                    {pin.user}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}