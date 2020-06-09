import React from "react";
import style from "./our-team.module.scss";
import { IOurTeam } from "../../../api/modules/our-team/our-team";
import TeamMemberComponent from "../../cores/team-member/team-member";

interface IOurTeamComponentProps {
  ourTeam: IOurTeam;
}

const OurTeamComponent = (props: IOurTeamComponentProps) => {
  return (
    <div className={style["our-team"]}>
      <div className={"container"}>
        <h2 className={"title"}>{props.ourTeam.title}</h2>
        <div className="divider" />
        <div
          className={` ${style["our-team-members"]} uk-grid uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-1@s`}
        >
          {props.ourTeam.members.map((member, key) => (
            <div key={key}>
              <TeamMemberComponent {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurTeamComponent;
