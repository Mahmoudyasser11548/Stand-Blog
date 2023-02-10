import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from '../../components/index'
import './BlogDetails.css'

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch(`http://localhost:3000/posts/` + id);
  const navigate = useNavigate()

  const handleDelete = () => { 
    fetch(`http://localhost:3000/posts/` + blog.id, {
      method: "DELETE"
    })
  }

  return ( 
    <div className="blog-detail">
      { isPending && <div>Loading..</div>}
      { error && <div>{error}</div>}
      {blog && (
        <article>
          <h2 className="title">{blog.title}</h2>
          <p className="body">{blog.body}</p>
          <button onClick={() => { handleDelete(); navigate('/')} } className="main-button">Delete Blog</button>
        </article>
      )
      }
    </div>
  );
}

export default BlogDetails
