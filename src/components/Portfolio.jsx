import Project from "./Project"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (
    <>
      <div className="container">
        <Project imgPath="../../assets/imgs/loadout.png" title="Loadout " deployLink="https://mvc-armory-project-3cbd4054ef3a.herokuapp.com/" gitLink="https://github.com/mollydotwhat/mvc-armory" />
      </div>
    </>
  )
}

{/* <Project imgPath="" title="" gitLink="" deployLink=""/> */ }
