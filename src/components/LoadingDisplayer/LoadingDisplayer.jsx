import "./loader.style.scss";

const LoadingDisplayer = () => {
  return (
    <div className="loader_wrapper">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
};

export default LoadingDisplayer;
