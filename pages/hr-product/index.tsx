import React from "react";
import SectionComponent from "../../components/cores/section/section";
import { welcomeData } from "../../api/modules/welcome/dummy-data";
import style from "./hr-product.module.scss";
import DescriptionSliderComponent from "../../components/modules/description-slider/description-slider";
import { descriptionSliderData } from "../../api/modules/description-slider/dummy-data";
import { functionalitiesData } from "../../api/modules/functionalities/dummy-data";
import FunctionalitiesComponent from "../../components/modules/functionalities/functionalities";
import PresentationComponent from "../../components/modules/presentation/presentation";
import { presentationData } from "../../api/modules/presentation/dummy-data";
import DevelopmentComponent from "../../components/modules/development/development";
import { developmentData } from "../../api/modules/development/dummy-data";
import FAQComponent from "../../components/modules/faq/faq";
import { faqData } from "../../api/modules/faq/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";

const HrProduct = () => {
  const { selectRoute } = React.useContext(RouteContext);
  React.useEffect(() => {
    selectRoute("Producten");
  }, []);
  return (
    <div>
      <Layout>
        <div className={style["header"]}>
          <SectionComponent
            backgroundImage={welcomeData()[0].backgroundImage}
            title={welcomeData()[0].title}
            button={welcomeData()[0].button}
            content={welcomeData()[0].content}
            postion="center"
            variant="primary"
            isHeader
          />
        </div>
        <DescriptionSliderComponent
          descriptionSlider={descriptionSliderData()}
          isHr
        />
        <FunctionalitiesComponent functionalities={functionalitiesData()} />
        <br />
        <PresentationComponent presentation={presentationData()} />
        <div className={`${style["parts"]} `}>
          <DevelopmentComponent development={developmentData()} />
          <FAQComponent faq={faqData()} />
        </div>
      </Layout>
    </div>
  );
};
export default HrProduct;
