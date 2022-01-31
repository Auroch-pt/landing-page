import "./Explanation.styles.scss";
import Step1 from "../../resources/explanation/explanation-step1.svg";
import Step2 from "../../resources/explanation/explanation-step2.svg";
import Step3 from "../../resources/explanation/explanation-step3.svg";
import Step4 from "../../resources/explanation/explanation-step4.svg";
import { useTranslation } from "react-i18next";

const Explanation = () => {
  const { t } = useTranslation();

  return (
    <section className="explanation_wrapper">
      <section className="explanation">
        <h1>{t("explanation.title")}</h1>
        <section className="explanation_timeline">
          <div className="explanation_timeline_step1">
            <img width="100vw" src={Step1} alt="step 1" />
            <section>
              <h3>{t("explanation.step1.title")}</h3>
              <p>{t("explanation.step1.description")}</p>
            </section>
          </div>
          <div className="explanation_timeline_step2">
            <img width="100vw" src={Step2} alt="step 2" />
            <section>
              <h3>{t("explanation.step2.title")}</h3>
              <p>{t("explanation.step2.description")}</p>
            </section>
          </div>
          <div className="explanation_timeline_step3">
            <img width="100vw" src={Step3} alt="step 3" />
            <section>
              <h3>{t("explanation.step3.title")}</h3>
              <p>{t("explanation.step3.description")}</p>
            </section>
          </div>
          <div className="explanation_timeline_step4">
            <img width="140px" src={Step4} alt="step 4" />
            <section>
              <h3>{t("explanation.step4.title")}</h3>
              <p>{t("explanation.step4.description")}</p>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Explanation;
