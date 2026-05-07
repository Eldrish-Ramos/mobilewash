function SiteNav({ phoneHref, phoneDisplay }) {
  return (
    <nav className="site-nav">
      <div className="nav-logo">The Lab</div>
      <a href={`tel:${phoneHref}`} className="nav-phone-link">{phoneDisplay}</a>
      <div className="nav-hamburger" aria-hidden="true">
        <div className="hamburger-line" />
        <div className="hamburger-line hamburger-line--short" />
        <div className="hamburger-line" />
      </div>
    </nav>
  )
}

export default SiteNav
