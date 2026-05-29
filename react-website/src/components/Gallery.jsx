import './Gallery.css'

const Gallery = () => {
  const images = [
    { src: '/images/intro/photo1.JPG', alt: '' },
    { src: '/images/intro/photo5.JPG', alt: '' },
    { src: '/images/intro/photo3.JPG', alt: '' },
    { src: '/images/intro/photo2.JPG', alt: '' },
    { src: '/images/intro/photo.JPG', alt: '' },
    { src: '/images/intro/photo6.png', alt: '' },
    { src: '/images/intro/photo4.png', alt: '' },
    { src: '/images/intro/photo7.jpg', alt: '' },
    { src: '/images/intro/photo8.JPG', alt: '' },
  ]

  return (
    <section className="collage-section">
      <div className="collage-grid">
        {images.map((image, index) => (
          <div key={index} className={`collage-cell cell-${index + 1}`}>
            <img 
              src={image.src} 
              alt={image.alt}
              loading={index < 4 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery