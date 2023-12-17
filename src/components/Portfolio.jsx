import Project from "./Project"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (
    <>
      <div className='container text-center justify-content-center'>

        <h1>Portfolio</h1>
        <h5>Click the preview image to go to deployed application or visit the repository.</h5>
        <div className="container">
          <Project imgPath="../../assets/imgs/loadout.png" title="Loadout Manager"
            deployLink="https://mvc-armory-project-3cbd4054ef3a.herokuapp.com/"
            gitLink="https://github.com/mollydotwhat/mvc-armory" />
          <Project imgPath="../../assets/imgs/movies.png" title="Trending Movies"
            deployLink="https://osorkon21.github.io/movie-watchlist/"
            gitLink="https://github.com/Osorkon21/movie-watchlist/" />
          <Project imgPath="../../assets/imgs/gifty.png" title="gifty"
            deployLink="https://gifty-gift-idea-tracker-9346ec5c500d.herokuapp.com/"
            gitLink="https://github.com/timpyjoe/Gift-idea-tracker" />
          <Project imgPath="../../assets/imgs/codequiz.png" title="Code Quiz"
            deployLink="https://seanwsutter.github.io/webapi-challenge-04/"
            gitLink="https://github.com/seanwsutter/webapi-challenge-04" />
          <Project imgPath="../../assets/imgs/notetaker.png" title="Note Taker"
            deployLink="https://note-taker-sws-8b20e871c90b.herokuapp.com/"
            gitLink="https://github.com/seanwsutter/11-express-notetaker-sws/>" />
          <Project imgPath="../../assets/imgs/weatherapp.png" title="Weather API"
            deployLink="https://seanwsutter.github.io/06-serverapi-challenge-sws/"
            gitLink="https://github.com/seanwsutter/06-serverapi-challenge-sws" />
        </div>
      </div>
    </>
  )
}

{/* <Project imgPath="" title="" gitLink="" deployLink=""/> */ }
