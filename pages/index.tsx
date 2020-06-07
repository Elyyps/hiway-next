import React from "react";
import Layout from "../components/Layout";
import DescriptionSliderComponent from "../components/modules/description-slider/description-slider";
import { descriptionSliderData } from "../api/modules/description-slider/dummy-data";
import { welcomeData } from "../api/modules/welcome/dummy-data";
import WelcomeComponent from "../components/modules/welcome/welcome";
import { moreAboutData } from "../api/modules/more-about/dummy-data";
import MoreAboutComponent from "../components/modules/more-about/more-about";
import RouteContext from "../context/route";

const HomePage = () => {
  const { selectRoute, route } = React.useContext(RouteContext);
  React.useEffect(() => {
    selectRoute("Home");
  }, []);
  return (
    <div>
      <Layout>
        <WelcomeComponent sections={welcomeData()} />
        <DescriptionSliderComponent
          descriptionSlider={descriptionSliderData()}
        />
        <MoreAboutComponent moreAbout={moreAboutData()} />
      </Layout>
    </div>
  );
};
export default HomePage;
