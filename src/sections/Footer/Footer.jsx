import {AiFillFacebook,AiOutlineBehance,AiFillInstagram} from 'react-icons/ai';
import {FaDribbbleSquare,FaTwitterSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import './Footer.css'
const Footer = () => { 
  return (
    <footer>
      <div className="icons">
        <span><AiFillFacebook /></span>
        <span><AiOutlineBehance/></span>
        <span><AiFillInstagram/></span>
        <span><FaDribbbleSquare/></span>
        <span><FaTwitterSquare/></span>
        <span><BsLinkedin/></span>
      </div>
      <hr />
      <p>Made With &lt;3 by Mahmoud</p>
    </footer>
  )
}
export default Footer