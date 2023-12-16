import { Link } from 'react-router-dom'

// components 
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'

export default function Navigation() {

  return (
    <>
      <div className='header'>
        <ul>
          <h5><a href="/">About Me</a></h5>
          <h5><a href="/portfolio">Portfolio</a></h5>
          <h5><a href="/contact">Contact</a></h5>
          <h5><a href="/resume">Resume</a></h5>
      </ul>
      </div>
    </>
    )
  }
  
  /* <BrowserRouter>
  <Routes>
  
  
  <Route to="/" element={<AboutMe />} />
  <Route to="">Portfolio</Route>
  <Route to="">Contact</Route>
  <Route to="">Resume</Route>
  
  </Routes>
</BrowserRouter> */
// <>
//     <Link to="/" element={<AboutMe />}>About</Link>
//     <Link to="/" element={<Portfolio />}>Portfolio</Link>
//     <Link to="/" element={<Resume />}>Resume</Link>
//     <Link to="/" element={<Contact />}>Contact</Link>
// </>