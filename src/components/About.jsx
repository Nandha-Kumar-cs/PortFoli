import "../About.css";
export function About() {
  return (
    <>
      <div className="about-container container" id="about-container">
        <article>
          <section>Hi, my name is</section>
          <section>Nandhakumar A.</section>
          <section>PHP deep, frontend sweet.</section>
          <section>
            “I'm a software engineer focused on scalable backend systems and
            full-stack web development using PHP and modern technologies.”
          </section>
          <section >
           <button className="btn mt-md-5">
           Discover My Work !
           </button>
          </section>
        </article>
      </div>
    </>
  );
}
