import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {currentYear} Zvi Marmor
        </p>
        <div className="footer-links">
          <a href="https://github.com/zvimarmor" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="footer-dot">·</span>
          <a href="https://www.linkedin.com/in/zvimarmor" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="footer-dot">·</span>
          <a href="mailto:zvimarmor@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
