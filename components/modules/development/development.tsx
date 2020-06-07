import React from "react";
import style from "./development.module.scss";
import { IDevelopment } from "../../../api/modules/development/development";
import ProgressComponent from "../../cores/progress/progress";

interface IDevelopmentComponentProps {
  development: IDevelopment;
}
const DevelopmentComponent = (props: IDevelopmentComponentProps) => {
  return (
    <div className={style["development"]}>
      <h2 className="title">{props.development.title}</h2>
      <div className="divider" />
      <ul className={style["development-items"]}>
        {props.development.items.map((item, key) => (
          <li key={key}>
            <ProgressComponent {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DevelopmentComponent;
