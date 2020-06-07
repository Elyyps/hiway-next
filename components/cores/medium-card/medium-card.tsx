import React from "react";
import style from "./medium-card.module.scss";
import LinkComponent from "../link/link";
import { ILink } from "../../../api/cores/link";
interface IMediumCardComponent {
  title: string;
  link: ILink;
  image: string;
}
export const MediumCardComponent = (props: IMediumCardComponent) => {
  return (
    <div className={style["medium-card"]}>
      <div className={style["medium-card-image"]}>
        <img src={props.image} alt="man using laptop" />
      </div>
      <div className={style["medium-card-content"]}>
        <span>{props.title}</span>
        <LinkComponent
          animated
          icon={"/icons/chevron-right.svg"}
          to={props.link.url ? props.link.url : ""}
          variant={"primary"}
          underlined
        >
          {props.link.text}
        </LinkComponent>
      </div>
    </div>
  );
};
