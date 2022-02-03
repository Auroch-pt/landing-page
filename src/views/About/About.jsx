import "./About.scss";
import team from "../../resources/illustrations/team.svg";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaWpexplorer } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdSelfImprovement } from "react-icons/md";
import { t } from "i18next";

const Explanation = () => {
  return (
    <>
      <div className="about">
        <div className="about__text">
          <h2>{t("about.title")}</h2>
          <p>{t("about.descriptionParagraph1")}</p>
          <p>{t("about.descriptionParagraph2")}</p>
        </div>
        <img src={team} alt=""></img>
      </div>
      <div className="about__values-container">
        <h2>{t("about.valuesTitle")}</h2>
        <div className="about__values">
          <div className="about__single-value">
            <FaWpexplorer size="25" />
            <h6>{t("about.value1Title")}</h6>
            <p>{t("about.value1Description")}</p>
          </div>
          <div className="about__single-value">
            <RiTeamLine size="25" />
            <h6>{t("about.value2Title")}</h6>
            <p>{t("about.value2Description")}</p>
          </div>
          <div className="about__single-value">
            <BsEmojiLaughing size="25" />
            <h6>{t("about.value3Title")}</h6>
            <p>{t("about.value3Description")}</p>
          </div>
          <div className="about__single-value">
            <MdSelfImprovement size="25" />
            <h6>{t("about.value4Title")}</h6>
            <p>{t("about.value4Description")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explanation;
