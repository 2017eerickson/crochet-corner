import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import cart from '../assets/cart.png'
import {useEffect } from 'react';
import { logout } from '../utilities/authUtilities';

function NavBar({ user, setUser, quantity, cartItems, setQuantity}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null && window.location.pathname === '/sellerhomepage'){
      navigate('/')
    }
  }, [user])

  
  cartItems ? setQuantity(cartItems.length) : setQuantity(0)


  

  const handleLogout = async() => {
    const response = await logout()
    if (response === null){
      console.log('logged out successfully')
      setUser(null)
      navigate('/')
    } 
  }

  return (
    <>
    {
    user === null?
      <Navbar  sticky="top" expand="lg" className='  shadow-lg border-3 bg-light  border-gray-300 rounded w-full' >
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
              <Nav.Link onClick={() => navigate('/customorder')}>
                Custom Order Form 
              </Nav.Link>
            </Nav>
            <button className='mx-5 flex flex-row' onClick={() => navigate('/cart')}>
              <img src={cart} width={"30vmin"}   />
              <p id='cartQuantity' className='border-2 h-6 w-6 rounded-full'>{quantity}</p>
            </button> 
            <Button onClick={() => navigate('/sellers')} variant="outline-primary">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      :
      <Navbar expand="lg p-10 bg-light border border-gray-300 rounded w-full" >
        <Container fluid>
          <Navbar.Brand href="#" onClick={() => navigate('/sellerhomepage')}>
            Crochet Corner
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate('/sellerhomepage')}>
                Home
              </Nav.Link>
              <Nav.Link  onClick={() => navigate('/sellerhomepage')}>
                Gallery
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/customorder')} disabled>
                Custom order requests 
              </Nav.Link>
            </Nav>
            <Button onClick={() => handleLogout()} variant="outline-primary">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      }
      </>
  )

}

export default NavBar;