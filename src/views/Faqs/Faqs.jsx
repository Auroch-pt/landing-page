import "./Faqs.scss";
import Accordion from "../../components/Accordion/Accordion";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  const { t } = useTranslation();

  return (
    <div className="faqs__container">
      <h3>FAQ's</h3>
      <p>
        Have questions? See the most frequently asked ones below. If you still
        need help, please contact us directly at freedev@auroch.pt
      </p>
      <div className="faqs__rectangles">
        <Accordion question={t("faqs.question1")} answer={t("faqs.answer1")} />
        <Accordion question={t("faqs.question2")} answer={t("faqs.answer2")} />
        <Accordion question={t("faqs.question3")} answer={t("faqs.answer3")} />
        <Accordion question={t("faqs.question4")} answer={t("faqs.answer4")} />
      </div>
    </div>
  );
};

export default Faqs;
