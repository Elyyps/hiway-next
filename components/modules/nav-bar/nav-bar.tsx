import React from "react";
import style from "./nav-bar.module.scss";
import { INavBar } from "../../../api/modules/nav-bar/nav-bar";
import ReactSVG from "react-svg";
import LinkComponent from "../../cores/link/link";
import DropdownComponent from "../../cores/dropdown/dropdown";
import NavBarModalComponent from "../nav-bar-modal/nav-bar-modal";
import HamburgerMenuComponent from "../../cores/hamburger-menu/hamburger-menu";
import { LanguageContext } from "../../../context/language";
import DropdownLinkComponent from "../../cores/dropdown-link/dropdown-link";
import RouteContext from "../../../context/route";

interface INavBarComponentProps {
  navBarModule: INavBar;
}
const NavBarComponent = (props: INavBarComponentProps) => {
  const [isClosed, setIsClosed] = React.useState(false);
  const { selectLanguage, language } = React.useContext(LanguageContext);
  const { selectRoute, route } = React.useContext(RouteContext);

  const onLanguageSelected = (text: string) => {
    setIsClosed(!isClosed);
    selectLanguage(text);
  };

  return (
    <div className={` ${style["nav-bar"]} container`}>
      <div className={style["nav-bar-logo"]}>
        <img src={props.navBarModule.logo} alt="hiway logo" />
      </div>
      <div className={` ${style["nav-bar-menu"]} ${"uk-visible@s"} `}>
        <ul>
          {props.navBarModule.items.map((item, key) => (
            <li
              key={key}
              className={style[route === item.title.text ? "selected" : ""]}
            >
              {item.dropdownLink ? (
                <DropdownComponent
                  title={item.title.text}
                  fullWidth
                  isClosed={route !== item.title.text && true}
                >
                  <div className={style["nav-bar-dropdown"]}>
                    <div className="uk-container uk-container-small">
                      <div className={style["dropdown-left"]}>
                        <span>{item.dropdownTitle && item.dropdownTitle}</span>
                        <div>{item.dropdownText}</div>
                      </div>
                      <div className={style["dropdown-right"]}>
                        {item.dropdownLink.map((link, key) => (
                          <div key={key}>
                            <DropdownLinkComponent {...link} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DropdownComponent>
              ) : (
                <LinkComponent to={item.title.url ? item.title.url : ""}>
                  {item.title.text}
                </LinkComponent>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={` ${style["nav-bar-language"]} ${"uk-hidden@s"} `}>
        <DropdownComponent title={language} variant="primary">
          <ul>
            <li onClick={() => onLanguageSelected("EN")}>English</li>
            <li onClick={() => onLanguageSelected("NL")}>Dutch</li>
          </ul>
        </DropdownComponent>
      </div>
      <div className={style["nav-bar-search"]}>
        <span className={"uk-visible@s"}>
          <ReactSVG src={props.navBarModule.searchIcon} />
        </span>
        <span className={"uk-hidden@s"}>
          <NavBarModalComponent icon={props.navBarModule.menuIcon}>
            <HamburgerMenuComponent menuItems={props.navBarModule.items} />
          </NavBarModalComponent>
        </span>
      </div>
    </div>
  );
};
export default NavBarComponent;
