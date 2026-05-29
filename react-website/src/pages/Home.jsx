import { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import './Home.css'

const Home = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Layout className="home">
      <div id="main-content">
        {/* Brief intro above the collage */}
        <section className="home-hero reveal-section" ref={heroRef}>
          <p className="home-greeting">Hello, I'm</p>
          <h2 className="home-name">Zvi Marmor</h2>
          <p className="home-tagline">
            Exploring the intersections of
            <span className="highlight"> AI</span>,
            <span className="highlight"> neuroscience</span>, and
            <span className="highlight"> philosophy</span>.
          </p>
          <div className="home-cta">
            <a href="/projects" className="btn btn--primary">View Projects</a>
            <a href="/contact" className="btn btn--secondary">Get in Touch</a>
          </div>
        </section>

        {/* Full-viewport photo collage below the text */}
        <Gallery />
      </div>
    </Layout>
  )
}

export default Home