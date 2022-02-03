import "./Footer.styles.scss";
import LANGUAGES from "../Translator/languages";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__company-details">
        <h6>freedev@auroch.pt</h6>
        <h6>
          © {new Date().getFullYear()} FreeDEV {t("footer.info")}.
        </h6>
      </div>
      <div className="footer__idioms">
        {Object.keys(LANGUAGES).map((lng) => (
          <h6
            key={lng}
            className={
              i18n.resolvedLanguage === lng
                ? "footer__idioms--selected"
                : "footer__idioms--default"
            }
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {LANGUAGES[lng].nativeName}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default Footer;
