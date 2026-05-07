function BookingSection({ phoneHref, phoneDisplay }) {
  return (
    <section className="cta-section">
      <div className="cta-phone-col">
        <p className="cta-call-label">Call or Text Anytime</p>
        <a href={`tel:${phoneHref}`} className="cta-phone-number">
          {phoneDisplay}
        </a>
      </div>
      <div className="cta-book-col">
        <div className="cta-book-heading">GET A<br />WASHOUT</div>
        <div className="cta-buttons">
          <a href={`tel:${phoneHref}`} className="cta-btn">Call Now</a>
          {/* <a href={`sms:${phoneHref}`} className="cta-btn">Text Details</a> */}
        </div>
      </div>
    </section>
  )
}

export default BookingSection
