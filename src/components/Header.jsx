
import Navigation from './Navigation'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  return (
    <>
      <div className="d-flex align-center justify-content-center bg-gradient bg-dark shadow-lg rounded-3 p-3 g-3 m-3 mb-3">
        <Navigation />
      </div>
    </>
  );
};