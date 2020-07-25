import React from "react";
import style from "./job-offer.module.scss";
import ReactSVG from "react-svg";

interface IJobOfferComponentProps {
  name: string;
  time: string;
  level: string;
  experience: string;
  url: string;
}
const JobOfferComponent = (props: IJobOfferComponentProps) => {
  return (
    <div className={style["job-offer"]}>
      <div className={style["job-offer-content"]}>
        <span className={style["job-offer-name"]}>{props.name}</span>

        <div>
          <span>{props.time}</span>
          <span>{props.level}</span>
          <span>{props.experience}</span>
        </div>
      </div>
      <div className={style["job-offer-button"]}>
        <span
          className="button"
          //   onClick={() => setSelectedTab(0)}
        >
          <ReactSVG src={"/svg/chevron-right.svg"} />
        </span>
      </div>
    </div>
  );
};
export default JobOfferComponent;
