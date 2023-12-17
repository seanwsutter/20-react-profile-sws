import './project.css'
export default function Project({ imgPath, title, deployLink, gitLink }) {
  return (
    <>
      <div className='container text-center justify-content-center'>

        <h1>Portfolio</h1>
        <h5>Click the preview image to go to deployed application or visit the repository.</h5>
        <div className='bg-secondary-subtle pt-3 pb-3'>


          {/* project */}
          <div className="card">
            <h3>{title}</h3>
            <a href={deployLink} target="_blank">
              <img src={imgPath}
                className="proj-img"
                style={{ width: "25%" }} />
            </a>
            <a href={gitLink}><h4>GitHub Repository</h4></a>
          </div>

          {/* project */}
          {/* <div className="card">
            <h3>{title}</h3>
            <a href={deployLink} target="_blank">
              <img src={imgPath}
                className="proj-img"
                style={{ width: "25%" }} />
            </a>
            <a href={gitLink}><h4>GitHub Repository</h4></a>
          </div> */}



        </div>
      </div>

    </>
  )
}

