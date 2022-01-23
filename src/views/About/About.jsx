import "./About.scss";
import team from "../../resources/illustrations/team.svg";

const Explanation = () => {
  return (
    <div className="about">
      <div className="about__text">
        <h2>About</h2>
        <p>
          We are a group of software developers with the ambitious and will of building projects
          that have a positive impact in the world. Freedev is a challenge, a dream and a revolution
          but we are also determined and crazy enough to make it happen.
        </p>
      </div>
      <img src={team} alt=""></img>
    </div>
  );
};

export default Explanation;
