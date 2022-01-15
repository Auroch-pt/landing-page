import "./Footer.styles.scss";
import LANGUAGES from "../Translator/languages";
import { useTranslation } from "react-i18next";

const Footer = () => {
  return <div className="footer">Footer</div>;
};

export default Footer;

/*const { t, i18n } = useTranslation();*/
/* <h3>{t("header.enroll")}</h3> */

/* <div>
        {Object.keys(LANGUAGES).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {LANGUAGES[lng].nativeName}
          </button>
        ))}
      </div> */
