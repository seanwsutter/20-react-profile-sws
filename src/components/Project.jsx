import './project.css'
export default function Project({ imgPath, title, deployLink, gitLink }) {
  return (
    <>
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

      </div>


    </>
  )
}

