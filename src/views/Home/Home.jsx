import { useErrorHandler } from "react-error-boundary";
import { t } from "i18next";
import { Fragment } from "react";

function Home() {
  return (
    <div className="Home">
      <h1>{t("welcome.title")}</h1>
      <p>{t("welcome.description")}</p>
      <ErrorThrower />
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
      <button onClick={setError}>{t("error.message")}</button>
    </Fragment>
  );
};

export default Home;
