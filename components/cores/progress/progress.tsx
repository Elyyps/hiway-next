import React from "react";
import style from "./progress.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface IProgressComponentProps {
  title: string;
  content: string;
  percentage: number;
}
const ProgressComponent = (props: IProgressComponentProps) => {
  return (
    <div className={style["progress"]}>
      <div className={style["progress-circle"]}>
        <div>
          <CircularProgressbar
            value={props.percentage}
            text={`${props.percentage}%`}
            styles={buildStyles({
              pathColor: "var(--secondary-color)",
              textColor: "black",
            })}
          />
        </div>
      </div>
      <div className={style["progress-content"]}>
        <span>{props.title}</span>
        <p>{props.content}</p>
      </div>
    </div>
  );
};
export default ProgressComponent;
