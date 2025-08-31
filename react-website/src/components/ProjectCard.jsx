import ImageRow from './ImageRow'
import './ProjectCard.css'

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  imageCaption,
  imageRow,
  buttons = [],
  imageStyle = {}
}) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div 
        dangerouslySetInnerHTML={{ __html: description }} 
      />
      
      {image && (
        <>
          <img 
            src={image} 
            alt={`${title} Screenshot`}
            style={{
              width: '40%', 
              borderRadius: '15px', 
              boxShadow: '4px 4px 15px rgba(0,0,0,0.1)', 
              marginBottom: '10px',
              display: 'block',
              margin: '0 auto 10px auto',
              ...imageStyle
            }}
          />
          {imageCaption && (
            <p style={{ fontSize: '0.95rem' }}>
              <em dangerouslySetInnerHTML={{ __html: imageCaption }} />
            </p>
          )}
        </>
      )}
      
      {imageRow && (
        <ImageRow 
          images={imageRow.images} 
          caption={imageRow.caption}
        />
      )}
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '12px' }}>
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className="github-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={button.icon} alt={button.text} />
            {button.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard