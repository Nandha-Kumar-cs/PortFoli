import "../Experience.css";
export function Experience() {
  return (
    <>
      <div className="work-container container w-100" id="work-container">
        <article className="w-100">
          <section className="section_work_head">
            <p className="d-flex justfy-content-md-center">Career History</p>
          </section>
          <section className="d-flex companies">
            <div className="pannelCmp-1">TrueTracking</div>
            <div className="pannelJob-1">
              <article>
                <section className="cmp-name">
                  Associate Software Developer <span>@TrueTracking</span>
                </section>
                <section>Aug 2024 - Present</section>
                <section>
                  <ul >
                    <li >
                      Debugged technical issues, boosting application
                      performance and user satisfaction.
                    </li>
                    <li>
                      Contributed to code reviews, enhancing team deliverables
                      through constructive feedback.
                    </li>
                    <li>
                      Integrated RESTful APIs for efficient data handling, with
                      strong error management and authentication.
                    </li>
                    <li>
                      Collaborated with senior developers to deliver features on
                      time.
                    </li>
                    <li>
                      Optimized existing codebase for performance and
                      scalability, refactoring legacy code to modern standards
                      using ES6+ features and design patterns.
                    </li>
                  </ul>
                </section>
              </article>
            </div>
          </section>

          <section  className="d-flex companies">
          <div className="pannelCmp-1">Upcomming</div>
          </section>

        </article >
      </div>
    </>
  );
}
