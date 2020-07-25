import React from "react";
import {
  headerAboutEnglishData,
  headerAboutDutchData,
} from "../../api/modules/welcome/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";
import SectionComponent from "../../components/cores/section/section";
import OurFocusComponent from "../../components/modules/our-focus/our-focus";
import {
  ourFocusEnglishData,
  ourFocusDutchData,
} from "../../api/modules/our-focus/dummy-data";
import OurTeamComponent from "../../components/modules/our-team/our-team";
import {
  ourTeamEnglishData,
  ourTeamDutchData,
} from "../../api/modules/our-team/dummy-data";
import VacanciesComponent from "../../components/modules/vacancies/vacancies";
import {
  vacanciesEnglishData,
  vacanciesDutchData,
} from "../../api/modules/vacancies/dummy-data";
import ReactSVG from "react-svg";
import { LanguageContext } from "../../context/language";

const AboutPage = () => {
  const { selectRoute } = React.useContext(RouteContext);
  const { language } = React.useContext(LanguageContext);
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
        <div className="overlay header-button">
          <ReactSVG
            src={"/svg/oval-1.svg"}
            className={`${"header-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
          <ReactSVG
            src={"/svg/oval-2.svg"}
            className={`${"header-overlay-2"} ${"overlay-icon"} uk-visible@xl`}
          />
          <SectionComponent
            {...(language === "EN"
              ? headerAboutEnglishData()
              : headerAboutDutchData())}
            postion="center"
            variant="primary"
            isHeader
            buttonIsHidden
            onButtonClick={executeScroll}
          />
        </div>
        <div ref={myRef} style={{ display: "block" }}>
          <OurFocusComponent
            ourFocus={
              language === "EN" ? ourFocusEnglishData() : ourFocusDutchData()
            }
          />
        </div>

        <div className="overlay">
          <OurTeamComponent
            ourTeam={
              language === "EN" ? ourTeamEnglishData() : ourTeamDutchData()
            }
          />
          <ReactSVG
            src={"/svg/oval-3.svg"}
            className={`${"our-team-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
        <VacanciesComponent
          vacancies={
            language === "EN" ? vacanciesEnglishData() : vacanciesDutchData()
          }
        />
      </Layout>
    </div>
  );
};
export default AboutPage;
