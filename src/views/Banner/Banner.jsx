import "./Banner.styles.scss";
import developers from "../../resources/developers.svg";
import { HiCheck } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner">
        <div className="banner__text">
          <h2>You decide when and where to work</h2>
          <h4>
            Freedev is a platform where you can build projects, either by solving tasks or by
            creating them.
          </h4>
          <button>Get Started</button>
        </div>
        <img alt="" src={developers} />
      </div>
      <div className="banner__rectangles">
        <div className="banner__rectangle">
          <HiCheck size={60} color="F78317" />
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </h6>
        </div>
        <div className="banner__rectangle">
          <HiCheck size={60} color="F78317" />
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </h6>
        </div>
        <div className="banner__rectangle">
          <HiCheck size={60} color="F78317" />
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;
