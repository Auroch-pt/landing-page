import { Fragment, useEffect, useState } from "react";
import LoadingDisplayer from "./components/LoadingDisplayer/LoadingDisplayer";

export default function App() {
  const [isAppLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {isAppLoading ? (
        <LoadingDisplayer />
      ) : (
        <div>
          <h1>App</h1>
          <p>Lorem ipsum</p>
        </div>
      )}
    </Fragment>
  );
}
