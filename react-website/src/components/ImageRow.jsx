import './ImageRow.css'

const ImageRow = ({ images, caption }) => {
  return (
    <>
      <div className="image-row">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={image.alt}
          />
        ))}
      </div>
      {caption && (
        <p style={{ fontSize: '0.95rem' }}>
          <em dangerouslySetInnerHTML={{ __html: caption }} />
        </p>
      )}
    </>
  )
}

export default ImageRow