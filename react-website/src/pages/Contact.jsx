import { useState } from 'react'
import Layout from '../components/Layout'
import './Contact.css'

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    
    // Submit form data
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form)
    }).then(() => {
      setShowSuccess(true)
      form.reset()
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    }).catch((error) => {
      console.error('Error:', error)
    })
  }

  return (
    <Layout>
      <main className="contact-container">
        <h2>Let's Connect</h2>
        <p>I'm always happy to talk about AI, trading, neuroscience, or just life in general. You can contact me directly at 
          <a href="mailto:zvimarmor@gmail.com" className="email-link"> zvimarmor@gmail.com</a>.
        </p>

        <p>Or connect with me on:</p>

        <div className="social-buttons">
          <a href="https://github.com/zvimarmor" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/images/icons/github-icon.png" alt="GitHub icon" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/zvimarmor" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/images/icons/linkedin-icon.png" alt="LinkedIn icon" /> LinkedIn
          </a>
          <a href="https://www.facebook.com/zvimarmor" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src="/images/icons/facebook-icon.png" alt="Facebook icon" /> Facebook
          </a>
        </div>

        <p>If you prefer, just leave me a quick message here:</p>

        {showSuccess && (
          <div className="success-message">
            ✅ Message sent! I'll get back to you soon.
          </div>
        )}

        <form action="https://formsubmit.co/zvimarmor@gmail.com" method="POST" onSubmit={handleSubmit} className="contact-form">
          <input type="hidden" name="_next" value="https://zvimarmor.github.io/personal-website/contact.html" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </Layout>
  )
}

export default Contact