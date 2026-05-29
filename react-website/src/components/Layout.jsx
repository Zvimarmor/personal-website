import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`app ${className}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout