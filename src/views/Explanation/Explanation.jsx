import "./Explanation.styles.scss";
import Step1 from "../../resources/explanation/explanation-step1.svg";
import Step2 from "../../resources/explanation/explanation-step2.svg";
import Step3 from "../../resources/explanation/explanation-step3.svg";
import Step4 from "../../resources/explanation/explanation-step4.svg";

const Explanation = () => {
  return (
    <section className="explanation_wrapper">
      <section className="explanation">
        <h1>See how it works</h1>
        <section className="explanation_timeline">
          <div className="explanation_timeline_step1">
            <img width="100vw" src={Step1} alt="step 1" />
            <section>
              <h3>Task are published</h3>
              <p>
                A task is published on Freedev. It can vary from a wide range of
                technologies.
              </p>
            </section>
          </div>
          <div className="explanation_timeline_step2">
            <img width="100vw" src={Step2} alt="step 2" />
            <section>
              <h3>Developers have the power to choosepublished</h3>
              <p>
                Developers from all over the world see which make sense
                according to their skillset and level of experience.
              </p>
            </section>
          </div>
          <div className="explanation_timeline_step3">
            <img width="100vw" src={Step3} alt="step 3" />
            <section>
              <h3>Pull request is sent</h3>
              <p>
                After the issue is solved, the developer sends a pull request to
                the person who created the issue, who will evaluate the quality
                of the code and either accept it, reject it or give some
                feedback.
              </p>
            </section>
          </div>
          <div className="explanation_timeline_step4">
            <img width="140px" src={Step4} alt="step 4" />
            <section>
              <h3>Instant reward</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Explanation;
