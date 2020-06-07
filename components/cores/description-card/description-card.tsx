import React from "react";
import style from "./description-card.module.scss";

interface IDescriptionCardComponentProps {
  icon: string;
  title: string;
  content?: string;
  variant: "primary" | "secondary";
  iconSize?: number;
}
const DescriptionCardComponent = (props: IDescriptionCardComponentProps) => {
  return (
    <div className={style["description-card"]}>
      <div
        style={
          props.iconSize
            ? props.iconSize > 960
              ? {
                  width: `${props.iconSize * 0.046}px`,
                  height: `${props.iconSize * 0.046}px`,
                }
              : {
                  width: `${props.iconSize * 0.08}px`,
                  height: `${props.iconSize * 0.08}px`,
                }
            : {}
        }
      >
        <img src={props.icon} alt="icon illustrating this section" />
      </div>
      <div>
        <h4 style={{ color: `var(--${props.variant}-color)` }}>
          {props.title}
        </h4>
        <p>{props.content}</p>
      </div>
    </div>
  );
};
export default DescriptionCardComponent;
