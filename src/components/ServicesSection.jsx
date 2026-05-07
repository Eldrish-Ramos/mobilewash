function ServicesSection({ serviceCards }) {
  return (
    <section className="services-section">
      <div className="services-heading-bar">
        <span>Our Services</span>
      </div>
      <div className="services-grid">
        {serviceCards.map((card) => (
          <article className="service-card" key={card.title}>
            <div className="service-number">{card.number}</div>
            <h3 className="service-title">{card.title}</h3>
            <p className="service-desc">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
