import "../About.css";
export function About() {
  return (
    <>
      <div
        className="about-container container d-flex   align-items-center animate__animated animate__fadeInDown "
        id="about-container"
      
      >
        <article className="mx-2">
          <section>Hi, my name is</section>
          <section>Nandhakumar A.</section>
          <section className="fw-semibold">PHP deep, frontend sweet.</section>
          <section>
            I'm a software engineer specializing in backend development and
            full-stack web applications using PHP and Laravel. I focus on
            building scalable, secure systems that deliver user-centric digital
            experiences.
          </section>
          <section>
           <a href="#aboutMe-container"> <button className="btn mt-md-5">Discover My Work !</button></a>
          </section>
        </article>
      </div>
    </>
  );
}
