import './Gallery.css'

const Gallery = () => {
  const images = [
    { src: '/images/intro/photo1.JPG', className: 'tall', alt: '', desktopOrder: 1, mobileOrder: 1 },
    { src: '/images/intro/photo5.JPG', className: 'big', alt: '', desktopOrder: 2, mobileOrder: 2 },
    { src: '/images/intro/photo3.JPG', className: 'wide', alt: '', desktopOrder: 3, mobileOrder: 3 },
    { src: '/images/intro/photo2.JPG', className: '', alt: '', desktopOrder: 4, mobileOrder: 4 },
    { src: '/images/intro/photo.JPG', className: '', alt: '', desktopOrder: 5, mobileOrder: 5 },
    { src: '/images/intro/photo6.png', className: '', alt: '', desktopOrder: 6, mobileOrder: 6 },
    { src: '/images/intro/photo4.png', className: '', alt: '', desktopOrder: 7, mobileOrder: 7 },
    { src: '/images/intro/photo7.jpg', className: 'wide', alt: '', desktopOrder: 8, mobileOrder: 9 },
    { src: '/images/intro/photo8.JPG', className: '', alt: '', desktopOrder: 9, mobileOrder: 8 },
  ]

  return (
    <section className="gallery-section">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            className={`${image.className} desktop-order-${image.desktopOrder} mobile-order-${image.mobileOrder}`}
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery