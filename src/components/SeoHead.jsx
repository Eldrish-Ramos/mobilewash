import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function SeoHead({ title, description, canonicalUrl, schema }) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('robots', 'index,follow,max-image-preview:large')
    setMeta('og:type', 'website', 'property')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', canonicalUrl, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setCanonical(canonicalUrl)

    let script = document.getElementById('ld-json-local-business')
    if (!script) {
      script = document.createElement('script')
      script.id = 'ld-json-local-business'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)

    return () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [canonicalUrl, description, schema, title])

  return null
}

export default SeoHead
