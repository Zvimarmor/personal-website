import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      title: "Thoughts on Time",
      date: "Dec 2024",
      link: "/posts/zman"
    },
    {
      title: "Song of Myself",
      date: "Dec 2024", 
      link: "/posts/song-of-myself"
    },
    {
      title: "Berkeley & Nagarjuna",
      date: "Nov 2024",
      link: "/posts/berkeley-nagarjuna"
    },
    {
      title: "Eviatar Shulman Task1",
      date: "Nov 2024",
      link: "/posts/eviatar-shulman-task1"
    }
  ];

  return (
    <Layout>
      <div className="blog-container">
        <h2>Blog</h2>
        <ul className="blog-list">
          {blogPosts.map((post, index) => (
            <li key={index}>
              <Link to={post.link}>
                {post.title}
              </Link>
              <span className="blog-date">{post.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog