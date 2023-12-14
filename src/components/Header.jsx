import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (

    <Navbar className="bg-dark">
      <Container>
        <Nav>
          <Navbar.Link href="">About </Navbar.Link>
          <Navbar.Link href="">Portfolio</Navbar.Link>
          <Navbar.Link href="">Contact</Navbar.Link>
          <Navbar.Link href="">Resume</Navbar.Link>
        </Nav >
      </Container >

    </Navbar>
  );
};