import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe() {
  return (
    <>
      <div className='container text-center justify-content-center'>

        <h1>About</h1>
        <div className='bg-secondary-subtle pt-3 pb-3'>
          <h5>My Name is Sean Sutter and welcome to my react profile!</h5>
          <div className="image">
            <img src="https://i.imgur.com/sWnEK1H.png"
              className="imageCSS"
              style={{ width: "15%" }}
              alt="A descriptive alt text" />

          </div>
          <div className="aboutText">
            <h5>I like movies, video games, family, friends, and my dog Murphy.</h5>
            <h5>The portfolio page contains my recent projects that I have been working on during this Bootcamp.</h5>
          </div>
        </div>
      </div>
    </>
  );
}
