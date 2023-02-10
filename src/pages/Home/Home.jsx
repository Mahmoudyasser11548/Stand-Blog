import { Landing } from '../../sections/index'
import { BlogPost, useFetch } from '../../components/index';
import './Home.css'

const Home = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:3000/posts')

  return ( 
    <>
      <Landing title="Trending Blogs" sent="Grab your thinking cap" />
      <h1 className='heading'>All Blogs!</h1>
      <div className="blogs">
        { error && <div>{error}</div> }
        { isPending && <div class="loading"></div> }
        { blogs && <BlogPost blogs={blogs} /> }
      </div>
    </>
  );
}

export default Home;