import { Link } from 'react-router-dom'
import Layout from './Layout'
import './BlogPost.css'

const BlogPost = ({ title, date, author, content, direction = "ltr" }) => {
  return (
    <Layout>
      <main className="blog-container">
        <Link to="/blog" className="back-to-blog">
          ← Back to Blog
        </Link>
        <article className="blog-post" dir={direction}>
          <h3>{title}</h3>
          <p className="blog-date">{date}</p>
          {author && (
            <p><strong>By {author}</strong><br /><br /></p>
          )}
          <div 
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </main>
    </Layout>
  )
}

export default BlogPost