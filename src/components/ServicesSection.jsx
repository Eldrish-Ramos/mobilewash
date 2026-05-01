function ServicesSection({ serviceCards }) {
  return (
    <section className="services-section">
      <div className="container-xl">
        <header className="section-header">
          <h2>What I Do</h2>
          <p>
            Premium mobile washout services for commercial transport. I handle interior trailer
            cleaning for food-grade, dry goods, and freight trailers with the right equipment. 
          </p>
        </header>

        <div className="services-grid">
          {serviceCards.map((card) => (
            <article className="service-card" key={card.title}>
              <div className="service-icon" aria-hidden="true">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
