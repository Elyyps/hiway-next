import * as React from "react";
import Link from "next/link";
import style from "./link.module.scss";
import ReactSVG from "react-svg";

interface ILinkComponentProps {
  animated?: boolean;
  children: any;
  icon?: string;
  target?: string;
  underlined?: boolean;
  to?: string;
  variant?: "primary" | "secondary";
  iconIsLeft?: boolean;
}

const LinkComponent = (props: ILinkComponentProps) => {
  return (
    <Link
      href={props.to ? props.to : "#"}
      prefetch={props.target ? false : true}
      passHref={props.target ? true : false}
    >
      <a
        href={props.to ? props.to : ""}
        target={props.target}
        className={`${style["link"]} ${
          props.variant && style[`link-${props.variant}`]
        }  ${style[props.animated ? "link-animated" : ""]} ${
          style[props.underlined ? "link-underlined" : ""]
        } ${style[props.iconIsLeft ? "link-left-icon" : "link-right-icon"]}`}
      >
        {props.icon && props.iconIsLeft && (
          <ReactSVG
            src={props.icon}
            style={
              props.variant && {
                fill: `var(--${props.variant}-color)`,
              }
            }
          />
        )}
        {props.children}
        {props.icon && !props.iconIsLeft && (
          <ReactSVG
            src={props.icon}
            style={
              props.variant && {
                fill: `var(--${props.variant}-color)`,
              }
            }
          />
        )}
      </a>
    </Link>
  );
};
export default LinkComponent;
