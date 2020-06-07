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
  to: string;
  variant?: "primary" | "secondary";
}

const LinkComponent = (props: ILinkComponentProps) => {
  return (
    <Link href={props.to ? props.to : ""}>
      <a
        href={props.target ? (props.to ? props.to : "") : ""}
        className={`${style["link"]} ${
          props.variant && style[`link-${props.variant}`]
        }  ${style[props.animated ? "link-animated" : ""]} ${
          style[props.underlined ? "link-underlined" : ""]
        }`}
      >
        {props.children}
        {props.icon && (
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
