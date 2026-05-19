function SiteNav({ phoneHref, phoneDisplay }) {
  return (
    <nav className="site-nav">
      <div className="nav-logo">The Lab Mobile Wash</div>
      <a href={`tel:${phoneHref}`} className="nav-phone-link">{phoneDisplay}</a>
    </nav>
  )
}

export default SiteNav
