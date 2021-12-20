import { Fragment, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/FallBackErrorBoundary/FallBackErrorBoundary";
import LoadingDisplayer from "./components/LoadingDisplayer/LoadingDisplayer";
import { useErrorHandler } from "react-error-boundary";

export default function App() {
  const [isAppLoading, setIsLoading] = useState(false);

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
    <Fragment>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHanldler}>
        {isAppLoading ? (
          <LoadingDisplayer />
        ) : (
          <div>
            <h1>App</h1>
            <p>Lorem ipsum</p>
            <ErrorThrower />
          </div>
        )}
      </ErrorBoundary>
    </Fragment>
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
      <button onClick={setError}>Get Error</button>
    </Fragment>
  );
};
