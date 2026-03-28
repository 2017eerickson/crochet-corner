import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import cart from '../assets/cart.png'
import { useState } from 'react';

function NavBar({ cartItems, user }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(cartItems.length);
  
  console.log(user)

  useState(() => {
    setQuantity(cartItems.length);
  }, [cartItems]);

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
          <button className='mx-5 flex flex-row' onClick={() => navigate('/cart')}>
            <img src={cart} width={"30vim"}  />
            <p className='border-2 h-6 w-6 rounded-full'>{quantity}</p>
          </button> 
          { /* Need to add conditional rendering for login/logout button based on user state */}
          {user?
            <Button onClick={() => navigate('/sellers')} variant="outline-primary">Logout</Button>
            :
            <Button onClick={() => navigate('/sellers')} variant="outline-primary">Login</Button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;