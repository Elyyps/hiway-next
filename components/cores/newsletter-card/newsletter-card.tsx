import React from "react";
import style from "./newsletter-card.module.scss";
import ButtonComponent from "../button/button";

interface INewletterCardComponentProps {
  title: string;
  description: string;
  button: string;
}
const NewsletterCardComponent = (props: INewletterCardComponentProps) => {
  return (
    <div className={style["newsletter-card"]}>
      <div className={style["newsletter-card-content"]}>
        <span className={style["newsletter-card-title"]}>{props.title}</span>
        <div className={style["newsletter-card-description"]}>
          {props.description}
        </div>
        <div className={style["newsletter-card-form"]}>
          <input type="text" placeholder="Your first & last name" />
          <input type="text" placeholder="Your e-mail adress" />
          <ButtonComponent
            title={props.button}
            variant="primary"
            icon={"/icons/chevron-right.svg"}
          />
        </div>
      </div>
    </div>
  );
};
export default NewsletterCardComponent;
