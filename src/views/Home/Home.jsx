import Banner from "../../views/Banner/Banner.jsx";
import CTABanner from "../../views/CTABanner/CTABanner.jsx";
import Tasks from "../Tasks/Tasks.jsx";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Tasks />
      <CTABanner />
    </div>
  );
}

export default Home;
