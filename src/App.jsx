import "./app.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorBoundary/FallBackErrorBoundary";
import LoadingDisplayer from "./components/LoadingDisplayer/LoadingDisplayer";
import { I18nextProvider, useTranslation } from "react-i18next";

//Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//views
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Faqs from "./views/Faqs/Faqs";

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
    }, 0);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHanldler}>
        {isAppLoading ? (
          <LoadingDisplayer />
        ) : (
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/faqs" element={<Faqs />} />
              <Route exact path="/aboutUs" element={<About />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </ErrorBoundary>
    </I18nextProvider>
  );
}
