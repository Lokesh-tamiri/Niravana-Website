import HomeBanner from "./sections/HomeBanner";
import HomeContact from "./sections/HomeContact";
import HomeFAQpage from "./sections/HomeFAQpage";
import HomeFeatures from "./sections/HomeFeatures";
import HomeSolutions from "./sections/HomeSolutions";
import OurExpertise from "./sections/OurExpertise";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeFeatures />
      <HomeSolutions />
      <OurExpertise />
      <HomeFAQpage />
      <HomeContact />
    </>
  );
}
