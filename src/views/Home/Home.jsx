import Banner from "../../views/Banner/Banner.jsx";
import CTABanner from "../../views/CTABanner/CTABanner.jsx";
import Explanation from "../Explanation/Explanation.jsx";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Explanation />
      <CTABanner />
    </div>
  );
}

export default Home;
