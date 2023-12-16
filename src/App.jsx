// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Header from './components/Header';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <AboutMe /> */}
        <Footer />
      </BrowserRouter>

    </>
  )
}

/* <Route to="/" element={<AboutMe/>} /> */
/* <Route to="">Portfolio</Route>
          <Route to="">Contact</Route>
          <Route to="">Resume</Route> */

/*   return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
  
            <Navbar.Link href="">About </Navbar.Link>
            <Navbar.Link href="">Portfolio</Navbar.Link>
            <Navbar.Link href="">Contact</Navbar.Link>
            <Navbar.Link href="">Resume</Navbar.Link>
    

        </Routes>
      </BrowserRouter>
    </>
  )*/