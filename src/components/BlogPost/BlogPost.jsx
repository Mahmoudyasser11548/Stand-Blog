import './BlogPost.css'
import {AiFillFacebook,AiFillInstagram} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BlogPost = ({ blogs }) => {
  return (
    <div className="bloglist">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
            <div className="txt">
            <Link to={`/posts/${blog.id}`}> 
              <h2 className="title-blog">{blog.title}</h2>
              <p>{blog.body}</p>
            </Link>
              <span className='Social'>
                <AiFillFacebook /> 
                <AiFillInstagram />
              </span>
            </div>
          </div>
      ))}
    </div>
  );
}

export default BlogPost;
