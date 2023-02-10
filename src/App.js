import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Contact, BlogDetails, AddBlog } from './pages/index';
import { NavBar, Footer } from './sections/index';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddBlog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/posts/:id' element={<BlogDetails />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
