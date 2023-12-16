import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe() {
  return (
    <>
      <div className='container text-center bg-dark-subtle'>
        <h1>About Me</h1>

        <img
          src="https://i.imgur.com/sWnEK1H.png"
          className="profileImg"
          style={{ width: "20%" }}
          alt="A descriptive alt text" />

        <p>My Name is Sean Sutter and welcome to my react profile!</p>
        <p>ortfolio contains recent projects with a preview image and a repository linmk</p>
      </div>
    </>
  );
}