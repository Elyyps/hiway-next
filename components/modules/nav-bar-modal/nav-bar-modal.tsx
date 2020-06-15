import * as React from "react";
import style from "./nav-bar-modal.module.scss";
import ReactSVG from "react-svg";
import ReactDOM from "react-dom";

export interface INavBarModalComponentProps {
  children?: any;
  icon?: any;
}

const NavBarModalComponent = (props: INavBarModalComponentProps) => {
  const [isOpen, setIsMenuOpened] = React.useState(false);

  const modalRef = React.createRef<HTMLDivElement>();
  const onClickAway = (e: any) => {
    if (modalRef.current && modalRef.current.contains(e.target)) return;
    setIsMenuOpened(false);
  };

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
        onClick={() => setIsMenuOpened(!isOpen)}
        className={style["nav-bar-modal__button"]}
      >
        {isOpen ? (
          <div className={style["nav-bar-modal__button__close"]}>
            <ReactSVG src={"/icons/cross.svg"} />
          </div>
        ) : (
          <div className={style["nav-bar-modal__button__open"]}>
            <ReactSVG src={props.icon} />
          </div>
        )}
      </button>
      {typeof document !== "undefined" && (
        <div
          className={`${
            style[isOpen ? "nav-bar-modal__opened" : "nav-bar-modal__closed"]
          } ${style["nav-bar-modal"]} `}
          onClick={(e): any => {
            onClickAway(e);
          }}
        >
          <div
            className={`${style["nav-bar-modal__holder"]} ${
              style[`nav-bar-modal__holder__menu__close`]
            } ${isOpen ? style[`nav-bar-modal__holder__menu__open`] : ""} `}
            ref={modalRef}
          >
            <div className={`${"container"} ${style[`nav-bar-modal__menu`]}`}>
              <div className={style["nav-bar-modal__items"]}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBarModalComponent;
