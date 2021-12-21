import { Fragment, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorBoundary/FallBackErrorBoundary";
import LoadingDisplayer from "./components/LoadingDisplayer/LoadingDisplayer";
import { useErrorHandler } from "react-error-boundary";
import { I18nextProvider, useTranslation } from "react-i18next";
import { t } from "i18next";
import LANGUAGES from "./components/Translator/languages";

export default function App() {
  const [isAppLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();

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
          <div>
            <h1>{t("welcome.title")}</h1>
            <div>
              {Object.keys(LANGUAGES).map((lng) => (
                <button
                  key={lng}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? "bold" : "normal",
                  }}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {LANGUAGES[lng].nativeName}
                </button>
              ))}
            </div>
            <p>{t("welcome.description")}</p>
            <ErrorThrower />
          </div>
        )}
      </ErrorBoundary>
    </I18nextProvider>
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
