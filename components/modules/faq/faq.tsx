import React from "react";
import style from "./faq.module.scss";
import { IFAQ } from "../../../api/modules/faq/faq";
import ExpandablePanelComponent from "../../cores/expandable-panel/expandable-panel";

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
              backgroundColor="#f3f5f6"
            >
              <p>{item.content}</p>
            </ExpandablePanelComponent>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FAQComponent;
