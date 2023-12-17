import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  // navbar style change depending on what path your currently on
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body">
        <Header />
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  )
}

