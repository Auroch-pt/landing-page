import "./Banner.styles.scss";
import developers from "../../resources/developers.svg";
import { HiCheck } from "react-icons/hi";
import { t } from "i18next";

const Banner = () => {
  const benefits = [t("banner.card1"), t("banner.card2"), t("banner.card3")];

  return (
    <div className="banner__container">
      <div className="banner">
        <div className="banner__text">
          <h2>{t("banner.title")}</h2>
          <h4>{t("banner.description")}</h4>
          <button>{t("header.enroll")}</button>
        </div>
        <img alt="" src={developers} />
      </div>
      <div className="banner__rectangles">
        {benefits.map((benefit, index) => {
          return (
            <div key={index} className="banner__rectangle">
              <HiCheck size={60} color="F78317" />
              <h6>{benefit}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
