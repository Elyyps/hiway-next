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
  return (
    <div className={styles["share"]}>
      <EmailShareButton
        subject={props.subject}
        body={props.title}
        url={props.url}
      >
        <ButtonComponent
          title={props.nameSocialShare}
          variant="primary"
          icon={"/icons/chevron-right.svg"}
        />
      </EmailShareButton>
    </div>
  );
};

export { ShareSocialComponent };
