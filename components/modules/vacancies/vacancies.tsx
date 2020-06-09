import React from "react";
import style from "./vacancies.module.scss";
import { IVacancies } from "../../../api/modules/vacancies/vacancies";
import JobOfferComponent from "../../cores/job-offer/job-offer";

interface IVacanciesComponentProps {
  vacancies: IVacancies;
}

const VacanciesComponent = (props: IVacanciesComponentProps) => {
  return (
    <div className={style["vacancies"]}>
      <div className={"container"}>
        <h2 className={"title"}>
          {props.vacancies.title} <span>({props.vacancies.jobs.length})</span>
        </h2>
        <div className="divider" />
        <div className={` ${style["vacancies-jobs"]}`}>
          {props.vacancies.jobs.map((job, key) => (
            <div key={key}>
              <JobOfferComponent {...job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default VacanciesComponent;
