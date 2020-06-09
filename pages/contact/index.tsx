import React from "react";
import { headerContactData } from "../../api/modules/welcome/dummy-data";
import style from "./contact.module.scss";
import Layout from "../../components/Layout";
import RouteContext from "../../context/route";
import SectionComponent from "../../components/cores/section/section";
import { ContactFormComponent } from "../../components/cores/contact-form/contact-form";
import ContactComponent from "../../components/modules/contact/contact";
import { contactData } from "../../api/modules/contact/dummy-data";

const ContactPage = () => {
  const { selectRoute } = React.useContext(RouteContext);
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
          />
        </div>
        <ContactComponent contact={contactData()} />
      </Layout>
    </div>
  );
};
export default ContactPage;
