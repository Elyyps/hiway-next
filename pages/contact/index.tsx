import React from "react";
import { headerContactData } from "../../api/modules/welcome/dummy-data";
import style from "./contact.module.scss";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";
import SectionComponent from "../../components/cores/section/section";
import ContactComponent from "../../components/modules/contact/contact";
import { contactData } from "../../api/modules/contact/dummy-data";

const ContactPage = () => {
  const { selectRoute } = React.useContext(RouteContext);
  const myRef = React.useRef(null);
  const scrollToRef = (ref: any) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const executeScroll = () => scrollToRef(myRef);

  React.useEffect(() => {
    selectRoute("Contact");
  }, []);
  return (
    <div className={style["contact"]}>
      <Layout>
        <div className={style["contact-header"]}>
          <SectionComponent
            backgroundImage={headerContactData().backgroundImage}
            title={headerContactData().title}
            button={headerContactData().button}
            content={headerContactData().content}
            postion="center"
            variant="primary"
            isHeader
            onButtonClick={executeScroll}
            buttonIsHidden
          />
        </div>
        <div ref={myRef}>
          <ContactComponent contact={contactData()} />
        </div>
      </Layout>
    </div>
  );
};
export default ContactPage;
