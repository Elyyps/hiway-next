import React from "react";
import style from "./expandable-panel.module.scss";
import ButtonComponent from "../button/button";

interface IExpandablePanelComponentProps {
  children: any;
  title: string;
  backgroundColor?: string;
}

const ExpandablePanelComponent = (props: IExpandablePanelComponentProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div
      className={` ${style["expandable-panel"]} ${
        style[props.backgroundColor ? "expandable-panel-faq" : ""]
      }`}
      style={
        props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
      }
    >
      <div className={style[isOpen ? "expandable-panel-open" : ""]}>
        <ButtonComponent
          title={props.title}
          variant="dropdown"
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className={style["open-content"]}>{props.children}</div>
      </div>
    </div>
  );
};
export default ExpandablePanelComponent;
