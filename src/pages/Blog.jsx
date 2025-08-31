import Layout from '../components/Layout'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      title: "The Time of Zman",
      date: "Dec 2024",
      link: "/posts/zman.html"
    },
    {
      title: "Song of Myself",
      date: "Dec 2024", 
      link: "/posts/song-of-myself.html"
    },
    {
      title: "Berkeley & Nagarjuna",
      date: "Nov 2024",
      link: "/posts/berkeley-nagarjuna.html"
    },
    {
      title: "Eviatar Shulman Task1",
      date: "Nov 2024",
      link: "/posts/eviatar-shulman-task1.html"
    }
  ];

  return (
    <Layout>
      <div className="blog-container">
        <h2>Blog</h2>
        <ul className="blog-list">
          {blogPosts.map((post, index) => (
            <li key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
              <span className="blog-date">{post.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog