import React from "react";
import style from "./newsletter-card.module.scss";
import { NewsletterCardFormComponent } from "./newsletter-card-form";

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
          <NewsletterCardFormComponent onSubmit={() => alert("submited")} />
        </div>
      </div>
    </div>
  );
};
export default NewsletterCardComponent;
