import React from "react";
import style from "./section.module.scss";
import ButtonComponent from "../button/button";
import LinkComponent from "../link/link";
import { ILink } from "../../../api/cores/link";
import ScreenWidthContext from "../../../context/screen-width";

interface ISectionComponentProps {
  postion: "center" | "left" | "bottom";
  backgroundImage: string;
  title: string;
  content?: string;
  button?: ILink;
  link?: ILink;
  variant: "primary" | "secondary";
  subTitle?: string;
  textFullLength?: boolean;
  isHeader?: boolean;
  leftPosition?: number;
  onButtonClick?: () => void;
}
const SectionComponent = (props: ISectionComponentProps) => {
  const { windowSize } = React.useContext(ScreenWidthContext);

  const leftPosition = (windowSize - 1290) / 2;
  return (
    <div
      className={` ${style["section"]} `}
      style={
        props.postion !== "bottom"
          ? windowSize > 640
            ? { height: `${windowSize / 3.3}px` }
            : { height: `${windowSize / 2.1}px` }
          : {}
      }
    >
      <div className={style["section-background"]}>
        <img
          src={props.backgroundImage}
          alt="man working in an office"
          style={props.isHeader ? { objectFit: "cover" } : {}}
        />
      </div>

      <div className={style["section-foreground"]}>
        <div
          className={` ${style[`section-foreground-${props.postion}`]} ${
            style[props.isHeader ? `header` : ""]
          }`}
          style={{
            marginLeft:
              leftPosition && props.postion === "center" && leftPosition > 50
                ? `${leftPosition}px`
                : "",
          }}
        >
          {props.subTitle && (
            <span
              className={` ${style["section-sub-title"]} ${"uk-visible@m"}`}
            >
              <div className={style[props.variant]} />
              {props.subTitle}
            </span>
          )}
          <h2 className={style["section-title"]}>{props.title}</h2>
          <p className={` ${style["section-content"]} ${"uk-visible@m"}`}>
            {props.content}
          </p>

          <div className={` ${style["section-button"]} `}>
            {props.button && (
              <ButtonComponent
                title={props.button.text}
                variant={props.variant}
                icon={"/icons/chevron-right.svg"}
                onClick={
                  props.onButtonClick ? props.onButtonClick : console.log
                }
              />
            )}
            {props.link && (
              <LinkComponent
                icon={"/icons/chevron-right.svg"}
                to={props.link.url ? props.link.url : ""}
                variant={props.variant}
                underlined
                animated
              >
                {props.link.text}
              </LinkComponent>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionComponent;
