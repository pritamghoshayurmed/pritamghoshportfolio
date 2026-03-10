import './Blog.css'

const posts = [
  {
    date: 'Oct 25, 2024',
    title: 'Making Your Creations Accessible to All.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=340&fit=crop',
  },
  {
    date: 'Feb 14, 2024',
    title: 'The Importance of User-centric Design.',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&h=340&fit=crop',
  },
  {
    date: 'Feb 7, 2024',
    title: '5 Free Hot Typographies to Download in 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=340&fit=crop',
  },
]

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog-header">
          <p className="section-label">Blog Post</p>
          <h2 className="section-title">Check Out My Articles</h2>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <p className="blog-card-date">{post.date}</p>
                <h3 className="blog-card-title">{post.title}</h3>
                <a href="#" className="blog-card-link">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
