import { Link } from 'react-router-dom'

export default function Navigation() {

  return (
    <>
      <navbar>

        <Link to="/">About Me</Link>
        <a href="/">Portfolio</a>
        <a href="/">Resume</a>

        {/* <a href="/">Contact</a> */}

        {/* <Nav>
          <Navbar.Link href="">About </Navbar.Link>
          <Navbar.Link href="">Portfolio</Navbar.Link>
          <Navbar.Link href="">Contact</Navbar.Link>
          <Navbar.Link href="">Resume</Navbar.Link>
        </Nav > */}

      </navbar>
    </>
  )
}