import React from "react";
import style from "./dropdown-link.module.scss";
import LinkComponent from "../link/link";
import { ILink } from "../../../api/cores/link";

interface IDropdownLinkComponentProps {
  link: ILink;
  content: string;
  linkIconLeft?: boolean;
}

const DropdownLinkComponent = (props: IDropdownLinkComponentProps) => {
  return (
    <div className={style["dropdown-link"]}>
      <span>
        <LinkComponent
          to={props.link.url ? props.link.url : ""}
          variant="secondary"
          animated
          icon={"/icons/chevron-right.svg"}
          iconIsLeft={props.linkIconLeft}
        >
          {props.link.text}
        </LinkComponent>
      </span>
      <div style={props.linkIconLeft ? { marginLeft: "16px" } : {}}>
        {props.content}
      </div>
    </div>
  );
};
export default DropdownLinkComponent;
