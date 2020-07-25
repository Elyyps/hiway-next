import React from "react";
import style from "./functionalities.module.scss";
import { IFunctionalities } from "../../../api/modules/functionalities/functionalities";
import ReactSVG from "react-svg";

interface IFunctionalitiesComponentProps {
  functionalities: IFunctionalities;
}
const FunctionalitiesComponent = (props: IFunctionalitiesComponentProps) => {
  return (
    <div className={style["functionalities"]}>
      <div className="container">
        <h2 className="title">{props.functionalities.title}</h2>
        <div className="divider" />
        <p className={style["functionalities-content"]}>
          {props.functionalities.content}
        </p>
        <ul>
          {props.functionalities.items.map((item, key) => (
            <li key={key}>
              <div>
                <ReactSVG src={"/svg/check.svg"} />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FunctionalitiesComponent;
