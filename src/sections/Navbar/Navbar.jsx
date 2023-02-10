import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './Navbar.css'
const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link className="logo" to="/">Stand Blog.</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='navbar-links'>
          <Nav className="links">
            <Link to="/">Home</Link>
            <Link to="/add">Add Blog</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;