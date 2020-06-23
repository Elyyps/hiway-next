import React from "react";
import Layout from "../components/Layout";
import DescriptionSliderComponent from "../components/modules/description-slider/description-slider";
import { descriptionSliderData } from "../api/modules/description-slider/dummy-data";
import { welcomeData } from "../api/modules/welcome/dummy-data";
import WelcomeComponent from "../components/modules/welcome/welcome";
import { moreAboutData } from "../api/modules/more-about/dummy-data";
import MoreAboutComponent from "../components/modules/more-about/more-about";
import RouteContext from "../context/route";
import ReactSVG from "react-svg";

const HomePage = () => {
  const { selectRoute } = React.useContext(RouteContext);
  React.useEffect(() => {
    selectRoute("Home");
  }, []);
  return (
    <div>
      <Layout>
        <WelcomeComponent sections={welcomeData()} />
        {/* <ReactSVG
          src={"/icons/oval-1.svg"}
          className={`overlay uk-visible@l`}
        /> */}
        <DescriptionSliderComponent
          descriptionSlider={descriptionSliderData()}
        />
        <div className={`overlay`}>
          <MoreAboutComponent moreAbout={moreAboutData()} />
          <ReactSVG
            src={"/icons/oval-2.svg"}
            className={`overlay-icon uk-visible@xl`}
          />
        </div>
      </Layout>
    </div>
  );
};
export default HomePage;
