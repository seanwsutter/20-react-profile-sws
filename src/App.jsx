import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
// import Header from './components/Header'
// import Header from './components/Header'

// css
// import './App.css';


export default function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>

          <Route to="/" element={<Aboutme />} />
          {/* <Route to="">Portfolio</Route>
          <Route to="">Contact</Route>
          <Route to="">Resume</Route> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}



{/*   return (
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
  )*/}