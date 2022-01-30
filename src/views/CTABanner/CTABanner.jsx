import "./CTABanner.scss";
import { t } from "i18next";

const CTABanner = () => {
  return (
    <div className="cta-banner">
      <h2>{t("CTABanner.title")}</h2>
      <h4>{t("CTABanner.subtitle")}</h4>
      <a href="https://dapp.freedev.pt/">
        <button> {t("header.enroll")}</button>
      </a>
    </div>
  );
};

export default CTABanner;
