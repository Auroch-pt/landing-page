import "./Header.styles.scss";
import { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import { t } from "i18next";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const setDimension = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenWidth]);

  return <div>{screenWidth < 768 ? <TabletHeader /> : <DesktopHeader />}</div>;
};

const TabletHeader = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="header__tablet">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        <h1>FREEDEV</h1>
        <button>{t("header.enroll")}</button>
      </div>

      <div className={isOpen ? "header__side-nav" : "header__side-nav--hidden"}>
        <Menu onClick={() => setOpen(false)} />
        <div
          className="header__background"
          onClick={() => setOpen(false)}
        ></div>
      </div>
    </>
  );
};

const DesktopHeader = () => {
  return (
    <div className="header__desktop">
      <div>
        <h1>FREEDEV</h1>
        <Menu />
      </div>
      <button> {t("header.enroll")}</button>
    </div>
  );
};

const Menu = (onClick) => {
  return (
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/" onClick={onClick}>
          {t("header.nav_option1")}
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/faqs" onClick={onClick}>
          {t("header.nav_option2")}
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/aboutUs" onClick={onClick}>
          {t("header.nav_option3")}
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
