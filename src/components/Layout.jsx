import Navbar from './Navbar'

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`app ${className}`}>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout