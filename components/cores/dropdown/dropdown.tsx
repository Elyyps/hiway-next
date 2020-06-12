import React from "react";
import style from "./dropdown.module.scss";
import ButtonComponent from "../button/button";

interface IDropDownComponentProps {
  title: string;
  children: any;
  position?: "left" | "right" | "top";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  isClosed?: boolean;
}
const DropdownComponent = (props: IDropDownComponentProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    (props.isClosed === undefined || props.isClosed) && setIsOpen(false);
  }, [props.title, props.isClosed]);
  return (
    <div
      className={`${style["dropdown"]} ${style[`dropdown-${props.variant}`]} ${
        style[isOpen ? "dropdown-opened" : ""]
      } `}
      style={props.fullWidth ? {} : { position: "relative" }}
    >
      <ButtonComponent
        title={props.title}
        onClick={() => setIsOpen(!isOpen)}
        variant="dropdown"
      />
      <div
        style={
          props.fullWidth
            ? {
                marginTop: "19px",
                width: "100%",
                borderTop: "1px solid #dfdfdf",
              }
            : {
                position: "absolute",
                marginTop: "-1px",
                bottom: props.position === "top" ? "100%" : "auto",
              }
        }
        className={`${style["dropdown-content"]} ${
          isOpen && style["dropdown-content-open"]
        }  ${style["dropdown-content"]} ${
          style[
            props.position
              ? `dropdown-content-${props.position}`
              : "dropdown-content-right"
          ]
        }  `}
      >
        {props.children}
      </div>
    </div>
  );
};
export default DropdownComponent;
