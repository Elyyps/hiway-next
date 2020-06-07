import React from "react";
import style from "./dropdown-link.module.scss";
import LinkComponent from "../link/link";
import { ILink } from "../../../api/cores/link";

interface IDropdownLinkComponentProps {
  link: ILink;
  content: string;
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
        >
          {props.link.text}
        </LinkComponent>
      </span>
      <div>{props.content}</div>
    </div>
  );
};
export default DropdownLinkComponent;
