import React from "react";
import SectionComponent from "../../components/cores/section/section";
import { welcomeData } from "../../api/modules/welcome/dummy-data";
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
import { faqData } from "../../api/modules/faq/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";

const FreelanceProduct = () => {
  const { selectRoute } = React.useContext(RouteContext);
  React.useEffect(() => {
    selectRoute("Producten");
  }, []);

  return (
    <div>
      <Layout>
        <div className={style["header"]}>
          <SectionComponent
            backgroundImage={welcomeData()[1].backgroundImage}
            title={welcomeData()[1].title}
            button={welcomeData()[1].button}
            content={welcomeData()[1].content}
            postion="center"
            variant="secondary"
            isHeader
          />
        </div>
        <DescriptionSliderComponent
          descriptionSlider={descriptionSliderData()}
          isFreelance
        />
        <FunctionalitiesComponent
          functionalities={functionalitiesFreelanceData()}
        />
        <br />
        <PresentationComponent presentation={presentationFreelanceData()} />
        <div className={`${style["parts"]} `}>
          <DevelopmentComponent development={developmentFreelanceData()} />
          <FAQComponent faq={faqData()} />
        </div>
      </Layout>
    </div>
  );
};
export default FreelanceProduct;
