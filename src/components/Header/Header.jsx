import "./Header.styles.scss";
import { useState, useEffect } from "react";

import { Fade as Hamburger } from "hamburger-react";

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
        <button>Enter app</button>
      </div>
      <div className={isOpen ? "header__side-nav" : "header__side-nav--hidden"}>
        <ul>
          <li>Homepage</li>
          <li>FAQ's</li>
          <li>About us</li>
        </ul>
        <div className="header__background" onClick={() => setOpen(false)}></div>
      </div>
    </>
  );
};

const DesktopHeader = () => {
  return (
    <div className="header__desktop">
      <div>
        <h1>FREEDEV</h1>
        <ul>
          <li>Homepage</li>
          <li>FAQ's</li>
          <li>About us</li>
        </ul>
      </div>
      <button>Enter app</button>
    </div>
  );
};

export default Header;
