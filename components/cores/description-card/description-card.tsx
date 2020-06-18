import React from "react";
import style from "./description-card.module.scss";
import ReactSVG from "react-svg";

interface IDescriptionCardComponentProps {
  icon: string;
  title: string;
  content?: string;
  variant: "primary" | "secondary";
  iconSize?: number;
  isHorizonal?: boolean;
}
const DescriptionCardComponent = (props: IDescriptionCardComponentProps) => {
  return (
    <div
      className={style["description-card"]}
      style={props.isHorizonal ? { flexDirection: "row" } : {}}
    >
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
        <ReactSVG src={props.icon} />
      </div>
      <div className={style[props.isHorizonal ? "horizontal" : ""]}>
        <h4 style={{ color: `var(--${props.variant}-color)` }}>
          {props.title}
        </h4>
        <p>{props.content}</p>
      </div>
    </div>
  );
};
export default DescriptionCardComponent;
