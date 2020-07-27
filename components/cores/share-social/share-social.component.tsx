import * as React from "react";
import styles from "./share-social-component.module.scss";
import { EmailShareButton } from "react-share";

export interface IShareSocialComponentProps {
  children: any;
  subject: string;
  body: string;
  url: string;
}

const ShareSocialComponent = (props: IShareSocialComponentProps) => {
  const MailShareButtonComponent = (prop: {
    subject: string;
    body: string;
    url: string;
    children: any;
  }) => (
    <EmailShareButton subject={prop.subject} body={prop.body} url={prop.url}>
      {props.children}
    </EmailShareButton>
  );
  return (
    <div className={styles["share"]}>
      <MailShareButtonComponent
        children={props.children}
        body={props.body}
        subject={props.subject}
        url={props.url}
      />
    </div>
  );
};

export { ShareSocialComponent };
