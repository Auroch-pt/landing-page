import { Fragment, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorBoundary/FallBackErrorBoundary";
import LoadingDisplayer from "./components/LoadingDisplayer/LoadingDisplayer";
import { I18nextProvider, useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Explanation from "./views/Explanation/Explanation";
import Home from "./views/Home/Home";

export default function App() {
  const [isAppLoading, setIsLoading] = useState(false);
  const { i18n } = useTranslation();

  const errorHanldler = (error, errorInfo) => {
    console.log("Error", error, errorInfo);
  };

  useEffect(() => {
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHanldler}>
        {isAppLoading ? (
          <LoadingDisplayer />
        ) : (
          <Fragment>
            <Header />
            <Home />
            <Explanation />
            <Footer />
          </Fragment>
        )}
      </ErrorBoundary>
    </I18nextProvider>
  );
}
