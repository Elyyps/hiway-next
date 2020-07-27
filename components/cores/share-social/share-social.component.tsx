import * as React from "react";
import styles from "./share-social-component.module.scss";
import { EmailShareButton } from "react-share";
import ButtonComponent from "../button/button";

export interface IShareSocialComponentProps {
  children: any;
  subject: string;
  title: string;
  url: string;
}

const ShareSocialComponent = (props: IShareSocialComponentProps) => {
  const MailShareButtonComponent = (prop: {
    subject: string;
    title: string;
    url: string;
    children: any;
  }) => (
    <EmailShareButton subject={prop.subject} body={prop.title} url={prop.url}>
      {props.children}
    </EmailShareButton>
  );
  return (
    <div className={styles["share"]}>
      <MailShareButtonComponent
        children={props.children}
        title={props.title}
        subject={props.subject}
        url={props.url}
      />
    </div>
  );
};

export { ShareSocialComponent };
