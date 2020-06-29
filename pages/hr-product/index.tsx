import React from "react";
import SectionComponent from "../../components/cores/section/section";
import { headerHRData } from "../../api/modules/welcome/dummy-data";
import style from "./hr-product.module.scss";
import DescriptionSliderComponent from "../../components/modules/description-slider/description-slider";
import { descriptionSliderData } from "../../api/modules/description-slider/dummy-data";
import { functionalitiesHrData } from "../../api/modules/functionalities/dummy-data";
import FunctionalitiesComponent from "../../components/modules/functionalities/functionalities";
import PresentationComponent from "../../components/modules/presentation/presentation";
import { presentationHrData } from "../../api/modules/presentation/dummy-data";
import DevelopmentComponent from "../../components/modules/development/development";
import { developmentHrData } from "../../api/modules/development/dummy-data";
import FAQComponent from "../../components/modules/faq/faq";
import { faqHRData } from "../../api/modules/faq/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";
import ReactSVG from "react-svg";

const HrProduct = () => {
  const { selectRoute } = React.useContext(RouteContext);

  const myRef = React.useRef(null);
  const scrollToRef = (ref: any) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const executeScroll = () => scrollToRef(myRef);

  React.useEffect(() => {
    selectRoute("Producten");
  }, []);
  return (
    <div>
      <Layout title="Hiway | HR Platform">
        <div className={`overlay`}>
          <div className={style["header"]}>
            <SectionComponent
              {...headerHRData()}
              postion="center"
              variant="primary"
              isHeader
            />
          </div>
          <DescriptionSliderComponent
            descriptionSlider={descriptionSliderData()}
            isHr
            onLinkClick={executeScroll}
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

        <div ref={myRef}>
          <FunctionalitiesComponent functionalities={functionalitiesHrData()} />
        </div>
        <br />
        <div className="overlay">
          <PresentationComponent presentation={presentationHrData()} />
          <ReactSVG
            src={"/icons/oval-3.svg"}
            className={`${"more-about-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
        <div className={`${style["parts"]} `}>
          <DevelopmentComponent development={developmentHrData()} />
          <FAQComponent faq={faqHRData()} />
        </div>
      </Layout>
    </div>
  );
};
export default HrProduct;
