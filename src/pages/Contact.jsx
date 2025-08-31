import Layout from '../components/Layout'
import './Contact.css'

const Contact = () => {
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

        <form action="https://formsubmit.co/zvimarmor@gmail.com" method="POST" target="dummyframe" className="contact-form">
          <input type="hidden" name="_next" value="https://zvimarmor.github.io/personal-website/contact.html" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <iframe name="dummyframe" id="dummyframe" style={{display: 'none'}}></iframe>
      </main>
    </Layout>
  )
}

export default Contact