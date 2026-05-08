// CategoryPage.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/ExploreNav";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const [pins, setPins] = useState([]);

  // FETCH CATEGORY-WISE IMAGES
  const fetchCategoryImages = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?query=${categoryName}&count=20&client_id=YOUR_UNSPLASH_ACCESS_KEY`
      );

      const data = await res.json();

      const formattedPins = data.map((item) => ({
        id: item.id,

        image: item.urls.regular,

        title:
          item.alt_description ||
          `${categoryName} inspiration`,

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
    setPins([]);
    fetchCategoryImages();
  }, [categoryName]);

  // INFINITE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        fetchCategoryImages();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [categoryName]);

  return (
    <div>
      <Navbar />

      <div
        style={{
          paddingTop: "90px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* CATEGORY TITLE */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "700",
            marginBottom: "35px",
            textTransform: "capitalize",
          }}
        >
          {categoryName} inspiration
        </h1>

        {/* PINTEREST GRID */}
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
                position: "relative",
                cursor: "pointer",
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
      </div>
    </div>
  );
};

export default CategoryPage;