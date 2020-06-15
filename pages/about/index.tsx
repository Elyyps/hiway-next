import React from "react";
import { headerAboutData } from "../../api/modules/welcome/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";
import SectionComponent from "../../components/cores/section/section";
import OurFocusComponent from "../../components/modules/our-focus/our-focus";
import { ourFocusData } from "../../api/modules/our-focus/dummy-data";
import OurTeamComponent from "../../components/modules/our-team/our-team";
import { ourTeamData } from "../../api/modules/our-team/dummy-data";
import VacanciesComponent from "../../components/modules/vacancies/vacancies";
import { vacanciesData } from "../../api/modules/vacancies/dummy-data";

const AboutPage = () => {
  const { selectRoute } = React.useContext(RouteContext);
  const myRef = React.useRef(null);
  const scrollToRef = (ref: any) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const executeScroll = () => scrollToRef(myRef);

  React.useEffect(() => {
    selectRoute("About");
  }, []);
  return (
    <div>
      <Layout>
        <div className={"header-button"}>
          <SectionComponent
            {...headerAboutData()}
            postion="center"
            variant="primary"
            isHeader
            buttonIsHidden
            onButtonClick={executeScroll}
          />
        </div>
        <div ref={myRef}>
          <OurFocusComponent ourFocus={ourFocusData()} />
        </div>
        <OurTeamComponent ourTeam={ourTeamData()} />
        <VacanciesComponent vacancies={vacanciesData()} />
      </Layout>
    </div>
  );
};
export default AboutPage;
