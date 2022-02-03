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
        <a href="https://dapp.freedev.pt/">
          <button> {t("header.enroll")}</button>
        </a>
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
      <a href="https://dapp.freedev.pt/">
        <button> {t("header.enroll")}</button>
      </a>
    </div>
  );
};

const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? " active" : "")}
          to="/"
        >
          {t("header.nav_option1")}
        </NavLink>
      </li>
      <li>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? " active" : "")}
          to="/faqs"
        >
          {t("header.nav_option2")}
        </NavLink>
      </li>
      <li>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? " active" : "")}
          to="/aboutUs"
        >
          {t("header.nav_option3")}
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
