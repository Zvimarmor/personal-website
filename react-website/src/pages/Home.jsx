import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import './Home.css'

const Home = () => {
  return (
    <Layout className="home">
      <div id="main-content">
        <section className="home-intro">
          <h2>Welcome to my corner of the web</h2>
          <p>Check out my AI trading experiments, my open-source projects, and my CV.</p>
        </section>
        
        <Gallery />
      </div>
    </Layout>
  )
}

export default Home