import * as React from "react";
import styles from "./share-social-component.module.scss";
import { EmailShareButton } from "react-share";
import ButtonComponent from "../button/button";

export interface IShareSocialComponentProps {
  nameSocialShare: string;
  subject: string;
  title: string;
  url: string;
}

const ShareSocialComponent = (props: IShareSocialComponentProps) => {
  const getShareControl = (nameSocial: string | undefined) => (
    <ButtonComponent
      title={nameSocial ? nameSocial : ""}
      variant="primary"
      icon={"/icons/chevron-right.svg"}
    />
  );

  const MailShareButtonComponent = (prop: {
    subject: string;
    title: string;
    url: string;
    nameSocialShare: string;
  }) => (
    <EmailShareButton subject={prop.subject} body={prop.title} url={prop.url}>
      {getShareControl(prop.nameSocialShare)}
    </EmailShareButton>
  );
  return (
    <div className={styles["share"]}>
      <MailShareButtonComponent
        nameSocialShare={props.nameSocialShare}
        title={props.title}
        subject={props.subject}
        url={props.url}
      />
    </div>
  );
};

export { ShareSocialComponent };
