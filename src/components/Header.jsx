import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';


function Header() {

  return (
    <Navbar expand="lg" className="header container p-0 my-4">
      <Container fluid>
        <Navbar.Brand href="/">lickIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className=' container'>
          <Nav
            className="m-auto d-fle pe-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-white mx-3">Home</Nav.Link>
            <Nav.Link href="/about" className="text-white mx-3">About</Nav.Link>
            <Nav.Link href="/gallery" className="text-white mx-3">Gallery</Nav.Link>
            <Nav.Link href="/FAQs" className="text-white mx-3">FAQs</Nav.Link>
            <Nav.Link href="/contect" className="text-white mx-3">Contect us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

