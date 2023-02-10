import './Landing.css'

const Landing = (props) => {
  return ( 
    <div className="landing">
      <div className='text'>
        <span>{props.title}</span>
        <span>{props.sent}</span>
        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, velit."</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit alias obcaecati amet, eligendi culpa assumenda?</p>
      </div>
    </div>
  );
}

export default Landing;