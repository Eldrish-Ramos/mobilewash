function LocationSection({ mapEmbedSrc }) {
  return (
    <section className="location-section">
      <div className="location-label">Service Area</div>
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
      <p className="location-tagline">We operate across the region</p>
    </section>
  )
}

export default LocationSection
