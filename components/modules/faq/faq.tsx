import React from "react";
import style from "./faq.module.scss";
import { IFAQ } from "../../../api/modules/faq/faq";
import ExpandablePanelComponent from "../../cores/expandable-panel/expandable-panel";
import LinkComponent from "../../cores/link/link";

interface IFAQComponentProps {
  faq: IFAQ;
}
const FAQComponent = (props: IFAQComponentProps) => {
  return (
    <div className={style["faq"]}>
      <h2 className="title">{props.faq.title}</h2>
      <div className="divider" />
      <ul className={style["faq-content"]}>
        {props.faq.items.map((item, key) => (
          <li key={key}>
            <ExpandablePanelComponent
              title={item.title}
              backgroundColor="var(--gray-color)"
            >
              <p>{item.content}</p>
            </ExpandablePanelComponent>
          </li>
        ))}
      </ul>
      <span className={style["faq-description"]}>
        {props.faq.description}
        <LinkComponent
          to={
            props.faq.descriptionLink.url ? props.faq.descriptionLink.url : ""
          }
          underlined
        >
          {props.faq.descriptionLink.text}
        </LinkComponent>
      </span>
    </div>
  );
};
export default FAQComponent;
