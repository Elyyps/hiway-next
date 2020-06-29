import React from "react";
import {
  headerContactEnglishData,
  headerContactDutchData,
} from "../../api/modules/welcome/dummy-data";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";
import SectionComponent from "../../components/cores/section/section";
import ContactComponent from "../../components/modules/contact/contact";
import {
  contactEnglishData,
  contactDutchData,
} from "../../api/modules/contact/dummy-data";
import ReactSVG from "react-svg";
import { LanguageContext } from "../../context/language";

const ContactPage = () => {
  const { selectRoute } = React.useContext(RouteContext);
  const { language } = React.useContext(LanguageContext);

  const myRef = React.useRef(null);
  const scrollToRef = (ref: any) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const executeScroll = () => scrollToRef(myRef);

  React.useEffect(() => {
    selectRoute("Contact");
  }, []);
  return (
    <div>
      <Layout title="Hiway | Contact">
        <div className={"header-button"}>
          <SectionComponent
            {...(language === "EN"
              ? headerContactEnglishData()
              : headerContactDutchData())}
            postion="center"
            variant="primary"
            isHeader
            onButtonClick={executeScroll}
            buttonIsHidden
          />
        </div>
        <div ref={myRef} className="overlay">
          <ContactComponent
            contact={
              language === "EN" ? contactEnglishData() : contactDutchData()
            }
          />
          <ReactSVG
            src={"/icons/oval-1.svg"}
            className={`${"contact-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
          <ReactSVG
            src={"/icons/oval-2.svg"}
            className={`${"contact-overlay"} ${"overlay-icon"} uk-visible@xl`}
          />
        </div>
      </Layout>
    </div>
  );
};
export default ContactPage;
