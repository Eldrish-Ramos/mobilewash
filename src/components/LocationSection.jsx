function LocationSection({ mapEmbedSrc }) {
  return (
    <section className="location-section">
      <div className="container-lg">
        <header className="section-header">
          <h2>Location</h2>
          <p>Oxnard</p>
        </header>

        <div className="map-embed-shell">
          <iframe
            title="Service area map"
            src={mapEmbedSrc}
            className="map-embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default LocationSection
