import Banner from "../../views/Banner/Banner.jsx";
import CTABanner from "../../views/CTABanner/CTABanner.jsx";
import Tasks from "../Tasks/Tasks.jsx";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Tasks />
      <CTABanner />
    </div>
  );
}

/*
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
}; */

export default Home;
