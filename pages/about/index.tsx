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
import ReactSVG from "react-svg";

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
      <Layout title="Hiway | About">
        <div className="overlay">
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
          <ReactSVG
            src={"/icons/oval-1.svg"}
            className={`${"header-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
          <ReactSVG
            src={"/icons/oval-2.svg"}
            className={`${"header-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
        <div className="overlay">
          <OurTeamComponent ourTeam={ourTeamData()} />
          <ReactSVG
            src={"/icons/oval-3.svg"}
            className={`${"our-team-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
        <VacanciesComponent vacancies={vacanciesData()} />
      </Layout>
    </div>
  );
};
export default AboutPage;
