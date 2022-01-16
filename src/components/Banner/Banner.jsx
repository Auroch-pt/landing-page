import "./Banner.styles.scss";
import developers from "../../resources/developers.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <h2>You decide when and where to work</h2>
        <h4>
          Freedev is a platform where you can build projects, either by solving or tasks or by
          creating them.
        </h4>
        <button>Get Started</button>
      </div>
      <img alt="" src={developers} />
    </div>
  );
};

export default Banner;
