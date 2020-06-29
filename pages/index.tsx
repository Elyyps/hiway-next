import React from "react";
import Layout from "../components/Layout";
import DescriptionSliderComponent from "../components/modules/description-slider/description-slider";
import {
  descriptionSliderEnglishData,
  descriptionSliderDutchData,
} from "../api/modules/description-slider/dummy-data";
import {
  welcomeEnglishData,
  welcomeDutchData,
} from "../api/modules/welcome/dummy-data";
import WelcomeComponent from "../components/modules/welcome/welcome";
import {
  moreAboutEnglishData,
  moreAboutDutchData,
} from "../api/modules/more-about/dummy-data";
import MoreAboutComponent from "../components/modules/more-about/more-about";
import RouteContext from "../context/route";
import ReactSVG from "react-svg";
import { LanguageContext } from "../context/language";

const HomePage = () => {
  const { selectRoute } = React.useContext(RouteContext);
  const { language } = React.useContext(LanguageContext);

  React.useEffect(() => {
    selectRoute("Home");
  }, []);
  return (
    <div>
      <Layout>
        <div className={`overlay`}>
          <WelcomeComponent
            sections={
              language === "EN" ? welcomeEnglishData() : welcomeDutchData()
            }
          />
          <DescriptionSliderComponent
            descriptionSlider={
              language === "EN"
                ? descriptionSliderEnglishData()
                : descriptionSliderDutchData()
            }
          />
          <ReactSVG
            src={"/icons/oval-1.svg"}
            className={`${"welcome-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
          <ReactSVG
            src={"/icons/oval-2.svg"}
            className={`${"welcome-overlay-2"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
        <div className={`overlay`}>
          <MoreAboutComponent
            moreAbout={
              language === "EN" ? moreAboutEnglishData() : moreAboutDutchData()
            }
          />
          <ReactSVG
            src={"/icons/oval-3.svg"}
            className={`${"more-about-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
      </Layout>
    </div>
  );
};
export default HomePage;
