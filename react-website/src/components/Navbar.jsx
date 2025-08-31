import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header id="navbar" className="navbar">
      <div className="navbar-inner">
        <h1>Zvi Marmor</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="/zvimarmor_cv.pdf" target="_blank" rel="noopener">Resume</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar