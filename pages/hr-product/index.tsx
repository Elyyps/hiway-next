import React from "react";
import SectionComponent from "../../components/cores/section/section";
import {
  headerHREnglishData,
  headerHRDutchData,
} from "../../api/modules/welcome/dummy-data";
import style from "./hr-product.module.scss";
import DescriptionSliderComponent from "../../components/modules/description-slider/description-slider";
import {
  descriptionSliderEnglishData,
  descriptionSliderDutchData,
} from "../../api/modules/description-slider/dummy-data";
import {
  functionalitiesHrEnglishData,
  functionalitiesHrDutchData,
} from "../../api/modules/functionalities/dummy-data";
import FunctionalitiesComponent from "../../components/modules/functionalities/functionalities";
import PresentationComponent from "../../components/modules/presentation/presentation";
import {
  presentationHrEnglishData,
  presentationHrDutchData,
} from "../../api/modules/presentation/dummy-data";
import DevelopmentComponent from "../../components/modules/development/development";
import {
  developmentHrEnglishData,
  developmentHrDutchData,
} from "../../api/modules/development/dummy-data";
import FAQComponent from "../../components/modules/faq/faq";
import {
  faqHREnglishData,
  faqHRDutchData,
} from "../../api/modules/faq/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";
import ReactSVG from "react-svg";
import { LanguageContext } from "../../context/language";

const HrProduct = () => {
  const { selectRoute } = React.useContext(RouteContext);
  const { language } = React.useContext(LanguageContext);

  const myRef = React.useRef(null);
  const scrollToRef = (ref: any) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const executeScroll = () => scrollToRef(myRef);

  React.useEffect(() => {
    selectRoute("Products");
  }, []);
  return (
    <div>
      <Layout title="Hiway | HR Platform">
        <div className={`overlay`}>
          <div className={style["header"]}>
            <SectionComponent
              {...(language === "EN"
                ? headerHREnglishData()
                : headerHRDutchData())}
              postion="center"
              variant="primary"
              isHeader
            />
          </div>
          <DescriptionSliderComponent
            descriptionSlider={
              language === "EN"
                ? descriptionSliderEnglishData()
                : descriptionSliderDutchData()
            }
            isHr
            onLinkClick={executeScroll}
          />
          <ReactSVG
            src={"/svg/oval-1.svg"}
            className={`${"welcome-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
          <ReactSVG
            src={"/svg/oval-2.svg"}
            className={`${"welcome-overlay-2"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>

        <div ref={myRef}>
          <FunctionalitiesComponent
            functionalities={
              language === "EN"
                ? functionalitiesHrEnglishData()
                : functionalitiesHrDutchData()
            }
          />
        </div>
        <br />
        <div className="overlay">
          <PresentationComponent
            presentation={
              language === "EN"
                ? presentationHrEnglishData()
                : presentationHrDutchData()
            }
          />
          <ReactSVG
            src={"/svg/oval-3.svg"}
            className={`${"more-about-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
        <div className={`${style["parts"]} `}>
          <DevelopmentComponent
            development={
              language === "EN"
                ? developmentHrEnglishData()
                : developmentHrDutchData()
            }
          />
          <FAQComponent
            faq={language === "EN" ? faqHREnglishData() : faqHRDutchData()}
          />
        </div>
      </Layout>
    </div>
  );
};
export default HrProduct;
