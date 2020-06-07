import React from "react";
import style from "./welcome.module.scss";
import { ISection } from "../../../api/cores/section";
import SectionComponent from "../../cores/section/section";

interface IWelcomeComponent {
  sections: ISection[];
}
const WelcomeComponent = (props: IWelcomeComponent) => {
  return (
    <div className={style["welcome"]}>
      {props.sections.map((section, key) => (
        <div key={key} className={style[section.variant]}>
          <SectionComponent {...section} />
        </div>
      ))}
    </div>
  );
};
export default WelcomeComponent;
