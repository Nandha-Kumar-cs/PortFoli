import "../AboutMe.css";
export function AboutMe() {
  return (
    <>
      <div
        className="aboutMe-container container px-sm-0 px-md-5 justify-content-center align-items-md-center"
        id="aboutMe-container"
      >
        <article className="d-flex w-100 flex-column flex-md-row">
          <section className="section-head-aboutMe">
            <p className="d-flex justfy-content-md-center">About Me</p>
            <p className="about-me">
              Hello! Im Nandhakumar , and I'm a backend developer with a growing
              passion for frontend development. My journey into web development
              began recently, and since then, I've been excited by the endless
              possibilities of building things that live on the internet. <br />
              <br />I currently work as a <span>PHP backend developer</span>,
              where I focus on writing clean, efficient server-side code. While
              backend development is my foundation, I'm also deeply interested
              in crafting interactive and engaging user interfaces — a curiosity
              that drives me to explore <span>HTML</span>, <span>CSS</span>, and{" "}
              <span>Javacript</span> in my free time.
            </p>
            <p>
              I'm eager to contribute my skills and expertise to diverse teams
              across various industries, helping drive innovation and success.
            </p>
            <p>What's in my dev toolbox these days? Glad you asked !</p>
            <p>
              <ul className="triangle-list">
                <li>php</li>
                <li>laravel</li>
                <li>jquery</li>
                <li>javascript(ES6+) </li>
                <li>mysql</li>
                <li>REST api</li>
              </ul>
            </p>
          </section>
          <section className="profile-pic">
            <div className="profile-pic-box">
              <div className="profile-pic-overlay"></div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
