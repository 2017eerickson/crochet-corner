import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import cart from '../assets/cart.png'

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg bg-light" >
      <Container fluid>
        <Navbar.Brand href="#" onClick={() => navigate('/')}>
          Crochet Corner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate('/')}>
              Home
            </Nav.Link>
            <Nav.Link  onClick={() => navigate('/gallery')}>
              Gallery
            </Nav.Link>
            <Nav.Link href="#" disabled>
              Custom Order Form 
            </Nav.Link>
          </Nav>
          <button onClick={() => navigate('/cart')}>
            <img src={cart} width={"30vim"}  />
          </button>
          <Form className="d-flex pl-10">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="search"
            />
            <NavDropdown title="Filters" id="navbarScrollingDropdown" className='p-3'>
              <NavDropdown.Item onClick={() => navigate('/new-arrivals')}>
                New Arrivals
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate('/hoods')}>
                Hoods
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate('/beanies')}>
                Beanies
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate('/misc')}>
                Misc
              </NavDropdown.Item>
            
            </NavDropdown>
            <Button variant="outline-success">Search</Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;