function BookingSection({ phoneHref, phoneDisplay }) {
  return (
    <section className="cta-section">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container-lg cta-content">
        <p>Ready to Wash? Call Me!</p>
        <a href={`tel:${phoneHref}`} className="phone-link">
          {phoneDisplay}
        </a>
      </div>
    </section>
  )
}

export default BookingSection
