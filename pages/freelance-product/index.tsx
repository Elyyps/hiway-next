import React from "react";
import SectionComponent from "../../components/cores/section/section";
import { headerFreelanceData } from "../../api/modules/welcome/dummy-data";
import style from "./freelance-product.module.scss";
import DescriptionSliderComponent from "../../components/modules/description-slider/description-slider";
import { descriptionSliderData } from "../../api/modules/description-slider/dummy-data";
import { functionalitiesFreelanceData } from "../../api/modules/functionalities/dummy-data";
import FunctionalitiesComponent from "../../components/modules/functionalities/functionalities";
import PresentationComponent from "../../components/modules/presentation/presentation";
import { presentationFreelanceData } from "../../api/modules/presentation/dummy-data";
import DevelopmentComponent from "../../components/modules/development/development";
import { developmentFreelanceData } from "../../api/modules/development/dummy-data";
import FAQComponent from "../../components/modules/faq/faq";
import { faqFreelanceData } from "../../api/modules/faq/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";
import ReactSVG from "react-svg";

const FreelanceProduct = () => {
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
      <Layout title="Hiway | Freelance Platform">
        <div className="overlay">
          <div className={style["header"]}>
            <SectionComponent
              {...headerFreelanceData()}
              postion="center"
              variant="secondary"
              isHeader
            />
          </div>
          <DescriptionSliderComponent
            descriptionSlider={descriptionSliderData()}
            isFreelance
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
          <FunctionalitiesComponent
            functionalities={functionalitiesFreelanceData()}
          />
        </div>

        <br />
        <div className="overlay">
          <PresentationComponent presentation={presentationFreelanceData()} />
          <ReactSVG
            src={"/icons/oval-3.svg"}
            className={`${"more-about-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
        <div className={`${style["parts"]} `}>
          <DevelopmentComponent development={developmentFreelanceData()} />
          <FAQComponent faq={faqFreelanceData()} />
        </div>
      </Layout>
    </div>
  );
};
export default FreelanceProduct;
