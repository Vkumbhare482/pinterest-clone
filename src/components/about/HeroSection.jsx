export default function HeroSection({
  hero1,
  hero2,
}) {

  return (

    <section className="hero-section">

      {/* BACKGROUND IMAGE */}

      <img
        src={hero1}
        alt=""
        className="hero-bg"
      />


      {/* FLOATING CARD */}

      <div className="hero-card">

        <img
          src={hero2}
          alt=""
        />

        <div>

          <h3>
            Bold nail ideas
          </h3>

          <p>
            48 Pins · 2 sections
          </p>

        </div>

      </div>

    </section>
  );
}