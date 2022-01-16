import "./CTABanner.scss";
import { t } from "i18next";

const CTABanner = () => {
  return (
    <div className="wrapper">
      <h2>{t("CTABanner.title")}</h2>
      <h4>{t("CTABanner.subtitle")}</h4>
      <button>{t("header.enroll")}</button>
    </div>
  );
};

export default CTABanner;
