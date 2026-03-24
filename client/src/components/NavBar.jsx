import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Crochet Corner</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Gallery</Nav.Link>
            <NavDropdown title="Filters" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">New Arrivals</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Hoods
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Beanies
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Misc
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Custom Order Form 
            </Nav.Link>
          </Nav>
          <Form className="d-flex ">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;