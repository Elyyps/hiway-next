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
import { faqData } from "../../api/modules/faq/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";

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
      <Layout>
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
        <div ref={myRef}>
          <FunctionalitiesComponent functionalities={functionalitiesHrData()} />
        </div>
        <br />
        <PresentationComponent presentation={presentationHrData()} />
        <div className={`${style["parts"]} `}>
          <DevelopmentComponent development={developmentHrData()} />
          <FAQComponent faq={faqData()} />
        </div>
      </Layout>
    </div>
  );
};
export default HrProduct;
