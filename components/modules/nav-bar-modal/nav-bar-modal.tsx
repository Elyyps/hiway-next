import * as React from "react";
import style from "./nav-bar-modal.module.scss";
import ReactSVG from "react-svg";

export interface INavBarModalComponentProps {
  children?: any;
  icon?: any;
}

const NavBarModalComponent = (props: INavBarModalComponentProps) => {
  const [isOpen, setIsMenuOpened] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "hidden";
      }
    }

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  return (
    <div className={style["nav-bar-modal__toggle"]}>
      <button
        type="button"
        className={style["nav-bar-modal__open"]}
        onClick={() => setIsMenuOpened(!isOpen)}
      >
        {isOpen ? (
          <ReactSVG src={"/icons/cross.svg"} />
        ) : (
          <ReactSVG src={props.icon} />
        )}
      </button>

      <div
        className={`${
          style[isOpen ? "nav-bar-modal__opened" : "nav-bar-modal__closed"]
        } ${style["nav-bar-modal"]} `}
      >
        <div
          className={`${style["nav-bar-modal__holder"]} ${
            style[`nav-bar-modal__holder__menu__close`]
          } ${isOpen ? style[`nav-bar-modal__holder__menu__open`] : ""} `}
        >
          <div
            className={`${style["nav-bar-modal__container"]} ${
              style[`nav-bar-modal__container__menu`]
            }`}
          >
            {/* <div
              className={style["nav-bar-modal__close"]}
              onClick={toggleOpened}
            >
              <ReactSVG src={cross} />
            </div> */}
            <div className={style["nav-bar-modal__items"]}>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarModalComponent;
