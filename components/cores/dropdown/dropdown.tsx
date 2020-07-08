import React from "react";
import style from "./dropdown.module.scss";
import ButtonComponent from "../button/button";

interface IDropDownComponentProps {
  title: string;
  children: any;
  position?: "left" | "right" | "top";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}
const DropdownComponent = (props: IDropDownComponentProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const wrapperRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, props]);

  React.useEffect(() => {
    setIsOpen(false);
  }, [props.title]);
  return (
    <div
      className={`${style["dropdown"]} ${style[`dropdown-${props.variant}`]} ${
        style[isOpen ? "dropdown-opened" : ""]
      } `}
      style={props.fullWidth ? {} : { position: "relative" }}
      ref={wrapperRef}
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
                marginTop: "5px",
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
