import './App.css'
import BookingSection from './components/BookingSection'
import HeroSection from './components/HeroSection'
import LocationSection from './components/LocationSection'
import SeoHead from './components/SeoHead'
import ServicesSection from './components/ServicesSection'
import SiteFooter from './components/SiteFooter'
import {
  businessName,
  mapEmbedSrc,
  phoneDisplay,
  phoneHref,
  seoDescription,
  seoFaqs,
  seoTitle,
  serviceAddress,
  serviceAreas,
  serviceCards,
  serviceCity,
  serviceRegion,
  siteUrl,
} from './siteContent'

function App() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    url: siteUrl,
    telephone: phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: serviceAddress,
      addressLocality: serviceCity,
      addressRegion: serviceRegion,
      addressCountry: 'US',
    },
    areaServed: serviceAreas,
    description: seoDescription,
    makesOffer: serviceCards.map((card) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: card.title,
        description: card.description,
      },
    })),
    mainEntity: seoFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="landing-page">
      <SeoHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={siteUrl}
        schema={localBusinessSchema}
      />
      <HeroSection phoneHref={phoneHref} phoneDisplay={phoneDisplay} />
      <ServicesSection serviceCards={serviceCards} />
      <BookingSection phoneHref={phoneHref} phoneDisplay={phoneDisplay} />
      <LocationSection mapEmbedSrc={mapEmbedSrc} />
      <SiteFooter />
    </main>
  )
}

export default App
