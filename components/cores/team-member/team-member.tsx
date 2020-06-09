import React from "react";
import style from "./team-member.module.scss";

interface ITeamMemberComponentProps {
  name: string;
  position: string;
}
const TeamMemberComponent = (props: ITeamMemberComponentProps) => {
  return (
    <div className={style["team-member"]}>
      <span>{props.name}</span>
      <span className={style["team-member-position"]}>{props.position}</span>
    </div>
  );
};
export default TeamMemberComponent;
