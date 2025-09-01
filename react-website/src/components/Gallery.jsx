import './Gallery.css'

const Gallery = () => {
  const images = [
    { src: '/images/intro/photo1.JPG', className: 'tall', alt: '' },
    { src: '/images/intro/photo5.JPG', className: 'big', alt: '' },
    { src: '/images/intro/photo3.JPG', className: 'wide', alt: '' },
    { src: '/images/intro/photo2.JPG', className: '', alt: '' },
    { src: '/images/intro/photo.JPG', className: '', alt: '' },
    { src: '/images/intro/photo6.png', className: '', alt: '' },
    { src: '/images/intro/photo4.png', className: '', alt: '' },
    { src: '/images/intro/photo7.jpg', className: 'wide', alt: '' },
    { src: '/images/intro/photo8.JPG', className: '', alt: '' },
  ]

  return (
    <section className="gallery-section">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            className={image.className} 
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery