function HeroSection({ phoneHref }) {
  return (
    <section className="hero-section">
      <div className="hero-watermark" aria-hidden="true">WASH</div>
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="hero-title-line1">THE LAB</span>
            <span className="hero-title-line2">MOBILE WASH</span>
          </h1>
          <p className="hero-subtitle">
            Professional truck &amp; trailer<br />
            washout service. We come to you.<br />
            High-pressure decontamination.
          </p>
          <a className="hero-cta" href={`tel:${phoneHref}`}>
            <span>Call Now</span>
            <span className="hero-cta-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="hero-right">
          <div className="hero-grid-lines" aria-hidden="true">
            <div className="hero-grid-line" />
            <div className="hero-grid-line" />
            <div className="hero-grid-line" />
          </div>
          <div className="hero-badge">
            <div className="hero-badge-rule" />
            <span className="hero-badge-label">Mobile Unit</span>
            <span className="hero-badge-sub">Est. 2024</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
