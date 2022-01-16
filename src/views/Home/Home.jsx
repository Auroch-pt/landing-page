import { useErrorHandler } from "react-error-boundary";
import { t } from "i18next";
import { Fragment } from "react";
import Banner from "../../views/Banner/Banner.jsx";
import CTABanner from "../CTABanner/CTABanner.jsx";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <CTABanner />
      {/* <ErrorThrower /> */}
    </div>
  );
}

const ErrorThrower = () => {
  const errorHanldler = useErrorHandler();

  const setError = () => {
    try {
      throw new Error("Error Test");
    } catch (e) {
      errorHanldler(e);
    }
  };

  return (
    <Fragment>
      {" "}
      <button onClick={setError}>{t("error.message")}</button>
    </Fragment>
  );
};

export default Home;
