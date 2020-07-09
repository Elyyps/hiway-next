import React from "react";
import style from "./newsletter.module.scss";
import { INewsletter } from "../../../api/modules/newsletter/newsletter";
import ButtonComponent from "../../cores/button/button";
import LinkComponent from "../../cores/link/link";

interface INewsletterComponentProps {
  newsletter: INewsletter;
}

const NewsletterComponent = (props: INewsletterComponentProps) => {
  return (
    <div className={style["newsletter"]}>
      <div className={"container"}>
        <div className={style["newsletter-content"]}>
          <h2>{props.newsletter.title}</h2>
          <br />

          <div>
            <ButtonComponent
              title={props.newsletter.button.text}
              variant="tertiary"
              icon={"/icons/chevron-right.svg"}
              href={"/contact"}
            />
            <span>
              {props.newsletter.info}{" "}
              <LinkComponent
                underlined
                to={props.newsletter.link.url ? props.newsletter.link.url : ""}
              >
                {props.newsletter.link.text}
              </LinkComponent>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsletterComponent;
