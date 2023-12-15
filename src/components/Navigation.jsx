import { Link } from 'react-router-dom'

// components 
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'

export default function Navigation() {

  return (
    <>
        <Link to="/" element={<AboutMe />}>About</Link>
        <Link to="/" element={<Portfolio />}>Portfolio</Link>
        <Link to="/" element={<Resume />}>Resume</Link>
        <Link to="/" element={<Contact />}>Contact</Link>
    </>
  )
}

{/* <BrowserRouter>
<Routes>


  <Route to="/" element={<AboutMe />} />
  <Route to="">Portfolio</Route>
  <Route to="">Contact</Route>
  <Route to="">Resume</Route>

</Routes>
</BrowserRouter> */}