import React from "react";
import style from "./newsletter.module.scss";
import { INewsletter } from "../../../api/modules/newsletter/newsletter";
import ButtonComponent from "../../cores/button/button";
import LinkComponent from "../../cores/link/link";
import { LightBoxComponent } from "../../cores/lightbox/lightbox";
import NewsletterCardComponent from "../../cores/newsletter-card/newsletter-card";

interface INewsletterComponentProps {
  newsletter: INewsletter;
}

const NewsletterComponent = (props: INewsletterComponentProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
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
              onClick={() => setIsOpen(true)}
            />
            <span>
              or check out our{" "}
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
      {isOpen && (
        <LightBoxComponent lightBoxOpen={isOpen} setLightBoxOpen={setIsOpen}>
          <div className={style["newsletter-lightbox"]}>
            <NewsletterCardComponent {...props.newsletter.card} />
          </div>
        </LightBoxComponent>
      )}
    </div>
  );
};
export default NewsletterComponent;
