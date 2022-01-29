import "./About.scss";
import team from "../../resources/illustrations/team.svg";
import { HiCheck } from "react-icons/hi";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaWpexplorer } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdSelfImprovement } from "react-icons/md";

const Explanation = () => {
  return (
    <>
      <div className="about">
        <div className="about__text">
          <h2>About us</h2>
          <p>
            We are a group of software developers with the ambitious and will of building projects
            that have a positive impact in the world.
          </p>
          <p>
            Freedev is a challenge, a dream and a revolution but we are also determined and crazy
            enough to make it happen.
          </p>
        </div>
        <img src={team} alt=""></img>
      </div>
      <div className="about__values-container">
        <h2>Our values</h2>
        <div className="about__values">
          <div className="about__single-value">
            <FaWpexplorer size="25" />
            <h6>Trying, exploring and sharing</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="about__single-value">
            <RiTeamLine size="25" />
            <h6>Trying, exploring and sharing</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="about__single-value">
            <BsEmojiLaughing size="25" />
            <h6>Trying, exploring and sharing</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="about__single-value">
            <MdSelfImprovement size="25" />
            <h6>Trying, exploring and sharing</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explanation;
