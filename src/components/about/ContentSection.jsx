export default function ContentSection({
  title,
  text,
  images,
  image,
  reverse,
  button = "Explore",
  shop,
}) {

  return (

    <section
      className={`content-section ${
        reverse ? "reverse" : ""
      }`}
    >

      {/* LEFT CONTENT */}

      <div className="content-left">

        <h2>
          {title}
        </h2>

        <p>
          {text}
        </p>

        <button>
          {button}
        </button>

      </div>


      {/* RIGHT SIDE */}

      {images ? (

        <div className="grid-layout">

          {images.map((img, index) => (

            <img
              key={index}
              src={img}
              alt=""
            />

          ))}

        </div>

      ) : (

        <div
          className={
            shop
              ? "shop-card"
              : "phone-card"
          }
        >

          <img
            src={image}
            alt=""
          />

        </div>

      )}

    </section>
  );
}