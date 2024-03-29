import * as React from "react";
import style from "./button.module.scss";
import Link from "next/link";
import ReactSVG from "react-svg";

interface IButtonProps {
  href?: string;
  icon?: string;
  onClick?: () => void;
  position?: "right" | "left";
  target?: string;
  title: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "tertiary" | "dropdown";
}

const ButtonComponent = (props: IButtonProps) => {
  const { onClick, href, target, title, icon, position, variant, type } = props;

  const returnIconPosition = (
    <React.Fragment>
      {((icon && position === "right") || (icon && !position)) && title}
      {icon ? (
        <span className={style[`icon-${position ? position : "right"}`]}>
          <ReactSVG src={icon ? icon : ""} />
        </span>
      ) : (
        title
      )}
      {icon && position === "left" && title}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {href ? (
        <Link href={href} passHref prefetch={false}>
          <a
            className={`${style[`button-${variant}`]} ${style["button"]}`}
            target={target}
          >
            <span className={` ${style["icon-svg"]} `}>
              {returnIconPosition}
            </span>
          </a>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${style[`button-${variant}`]} ${style["button"]}`}
          type={type ? type : "button"}
        >
          {returnIconPosition}
          {variant === "dropdown" && (
            <span className={style[`icon-${position ? position : "right"}`]}>
              <ReactSVG src={"/svg/chevron-down.svg"} />
            </span>
          )}
        </button>
      )}
    </React.Fragment>
  );
};

export default ButtonComponent;
