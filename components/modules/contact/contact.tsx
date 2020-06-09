import React from "react";
import style from "./contact.module.scss";
import { IContact } from "../../../api/modules/contact/contact";
import { ContactFormComponent } from "../../cores/contact-form/contact-form";
import ReactSVG from "react-svg";
import ScreenWidthContext from "../../../context/screen-width";

interface IContactComponentProps {
  contact: IContact;
}
const ContactComponent = (props: IContactComponentProps) => {
  const { windowSize } = React.useContext(ScreenWidthContext);

  return (
    <div className={` ${style["contact"]} container`}>
      <h2 className="title">{props.contact.title}</h2>
      <div>
        <div className={style["contact-left"]}>
          <p>{props.contact.description}</p>
          <ContactFormComponent onSubmit={() => alert("submited")} />
        </div>
        <div className={style["contact-right"]}>
          <div>
            <h4>{props.contact.subTitle}</h4>
            <span>
              <ReactSVG src="/icons/location.svg" />
              {props.contact.address}
            </span>
            <span>
              <ReactSVG src="/icons/phone.svg" />
              {props.contact.phoneNumber}
            </span>
            <span>
              <ReactSVG src="/icons/message.svg" />
              {props.contact.email}
            </span>
          </div>
          <div className={style["contact-image"]}>
            <div>
              <img src={props.contact.mapImage} alt="" />
            </div>
            <span
              style={{
                top: `${windowSize / 110}%`,
                left: `${windowSize / 31}%`,
              }}
            >
              <ReactSVG src="/icons/location.svg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactComponent;
