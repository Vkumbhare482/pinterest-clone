export default function CardsSection({
  cards,
}) {

  return (

    <section className="cards-section">

      <h2>
        All in a more positive
        place online
      </h2>


      <div className="cards-grid">

        {cards.map((card, index) => (

          <div
            className="info-card"
            key={index}
          >

            <img
              src={card.image}
              alt=""
            />

            <div className="card-content">

              <h3>
                {card.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}