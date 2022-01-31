import Banner from "../../views/Banner/Banner.jsx";
import CTABanner from "../../views/CTABanner/CTABanner.jsx";
import Explanation from "../Explanation/Explanation.jsx";
import Tasks from "../Tasks/Tasks.jsx";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Explanation />
      <Tasks />
      <CTABanner />
    </div>
  );
}

export default Home;
