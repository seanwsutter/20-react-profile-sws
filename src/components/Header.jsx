// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container';
import Navigation from './Navigation'

// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  return (
    <>
      <div className="header">
        <h2>Sean Sutter</h2>
        <Navigation />
      </div>
    </>
  );
};