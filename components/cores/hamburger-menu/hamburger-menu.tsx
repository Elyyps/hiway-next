import * as React from "react";
import style from "./hamburger-menu.module.scss";
import LinkComponent from "../link/link";
import { INavItem } from "../../../api/cores/nav-item";
import ExpandablePanelComponent from "../expandable-panel/expandable-panel";
import ReactSVG from "react-svg";
import { IDropdownLink } from "../../../api/cores/dropdown-link";
import DropdownLinkComponent from "../dropdown-link/dropdown-link";
export interface IHamburgerMenuComponentProps {
  menuItems: INavItem[];
}

const HamburgerMenuComponent = (props: IHamburgerMenuComponentProps) => (
  <div className={style["hamburger-menu"]}>
    <ul className={style["hamburger-menu-navigation"]}>
      {props.menuItems.map((item, key) =>
        item.dropdownLink ? (
          <li key={key}>
            <ExpandablePanelComponent title={item.title.text}>
              <ul>
                {item.dropdownLink?.map((link: IDropdownLink, key: number) => (
                  <li key={key}>
                    <DropdownLinkComponent {...link} linkIconLeft />
                  </li>
                ))}
              </ul>
            </ExpandablePanelComponent>
          </li>
        ) : (
          <li key={key}>
            <LinkComponent to={item.title.url ? item.title.url : ""}>
              {item.title.text}
              <ReactSVG src={"/svg/chevron-right.svg"} />
            </LinkComponent>
          </li>
        )
      )}
    </ul>
  </div>
);
export default HamburgerMenuComponent;
