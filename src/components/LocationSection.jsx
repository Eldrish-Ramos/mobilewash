function LocationSection({ mapEmbedSrc }) {
  return (
    <section className="location-section">
      <div className="location-label">Service Area - Same Meeting Location Every Time - <b>WE WILL MEET YOU AT THIS LOCATION AFTER CONFIRMING YOUR WASHOUT</b></div>
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
      <p className="location-tagline">Oxnard - Camarillo - Port Hueneme - Thousand Oaks</p>
    </section>
  )
}

export default LocationSection
