function HeroSection({ phoneHref, phoneDisplay }) {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-content container-lg">
        

        <h1 className="hero-title">
          <span>THE LAB</span>
          <span className="hero-title-accent">MOBILE WASH</span>
        </h1>

        <p className="hero-subtitle">
          Professional Truck &amp; Trailer Washout Service
        </p>

        <a className="hero-phone-small" href={`tel:${phoneHref}`}>
          {phoneDisplay}
        </a>

        <a className="call-button" href={`tel:${phoneHref}`}>
          <span aria-hidden="true">☎</span>
          <span>Call Now</span>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
