import React from "react";
import style from "./contact.module.scss";
import { IContact } from "../../../api/modules/contact/contact";
import {
  ContactFormComponent,
  IContactFormValues,
} from "../../cores/contact-form/contact-form";
import ReactSVG from "react-svg";

interface IContactComponentProps {
  contact: IContact;
}
const ContactComponent = (props: IContactComponentProps) => {
  const handlePress = (name: string, email: string) => {
    alert("not working yet");
    console.log(`name: ${name} /n email: ${email}`);
    // fetch("/api/send-email", {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name: name, email: email }),
    // });
  };

  return (
    <div className={` ${style["contact"]} container`}>
      <h2 className="title">{props.contact.title}</h2>
      <div>
        <div className={style["contact-left"]}>
          <p>{props.contact.description}</p>
          <ContactFormComponent
            onSubmit={(e: IContactFormValues) =>
              handlePress(e.firstName, e.email)
            }
          />
        </div>
        <div className={style["contact-right"]}>
          <div>
            <h4>{props.contact.subTitle}</h4>
            <span>
              <ReactSVG src="/svg/location.svg" />
              {props.contact.address}
            </span>
            <span>
              <ReactSVG src="/svg/phone.svg" />
              {props.contact.phoneNumber}
            </span>
            <span>
              <ReactSVG src="/svg/message.svg" />
              {props.contact.email}
            </span>
          </div>
          <div className={style["contact-image"]}>
            <div>
              <img src={props.contact.mapImage} alt="" />
            </div>
            {/* <span
              style={{
                top: `${windowSize / 110}%`,
                left: `${windowSize / 31}%`,
              }}
            >
              <ReactSVG src="/svg/location.svg" />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactComponent;
