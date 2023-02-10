import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './AddBlog.css'

const AddBlog = () => {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [pend, setPend] = useState(false)
  const navigate = useNavigate()

  const submit = (e) => { 
    e.preventDefault();
    const blog = { title, subject, body }
    
    setPend(true);

    fetch('http://localhost:3000/posts', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog)
    }).then(_ => {
      console.log(blog);
      setPend(false);
    })
  }


  return ( 
    <div className='add-blog'>
      <div className="title">
        <h3>Add New Blog</h3>
        <span>let`s see new Blog!</span>
      </div>
      <form onSubmit={submit} className="form">
        <div className="input-box">
          <input onChange={(e) => setTitle(e.target.value)} required type="text" name="title" id="title" />
          <span>Blog Title</span>
        </div>
        <div className="input-box">
          <input onChange={(e)=>setSubject(e.target.value)} required type="text" name="subject" id="subject" />
          <span>Blog subject</span>
        </div>
        <div className="input-box">
          <textarea onChange={(e)=>setBody(e.target.value)} required name="body" id="body" ></textarea>
          <span>Blog body</span>
        </div>
        { !pend && <button className='main-button'>Add Blog</button>}
        {pend && <button disabled className='main-button' onClick={navigate('/')}>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default AddBlog;