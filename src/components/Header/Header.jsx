import "./Header.styles.scss";
import LANGUAGES from "../Translator/languages";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="header_wrapper">
      <h3>{t("header.enroll")}</h3>
      <div>
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
      </div>
    </div>
  );
};

export default Header;
