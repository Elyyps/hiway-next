import React from "react";
import style from "./our-focus.module.scss";
import { IOurFocus } from "../../../api/modules/our-focus/our-focus";
import LinkComponent from "../../cores/link/link";
import DescriptionCardComponent from "../../cores/description-card/description-card";
interface IOurFocusComponentProps {
  ourFocus: IOurFocus;
}
const OurFocusComponent = (props: IOurFocusComponentProps) => {
  return (
    <div className={` ${style["our-focus"]} ${"container"} `}>
      <h2 className="title">{props.ourFocus.title}</h2>
      <div className="divider" />
      <div>
        <div className={style["our-focus-left"]}>
          <p>{props.ourFocus.content}</p>
          <span>
            {props.ourFocus.links.map((link, key) => (
              <LinkComponent
                to={link.url ? link.url : ""}
                key={key}
                variant={link.variant}
                animated
                icon={"/icons/chevron-right.svg"}
              >
                {link.text}
              </LinkComponent>
            ))}
          </span>
        </div>
        <div className={style["our-focus-right"]}>
          {props.ourFocus.descriptionCards.map((card, key) => (
            <div key={key}>
              <DescriptionCardComponent
                {...card}
                variant="primary"
                isHorizonal
              />
            </div>
          ))}
        </div>
      </div>
      <div className={style["our-focus-bottom"]}>
        <div className={style["images"]}>
          {props.ourFocus.images.slice(0, 2).map((image, key) => (
            <div key={key}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div>
          <img src={props.ourFocus.images[2]} alt="" />
        </div>
      </div>
    </div>
  );
};
export default OurFocusComponent;
