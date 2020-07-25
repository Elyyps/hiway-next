import * as React from "react";
import ReactDOM from "react-dom";
import style from "./lightbox.module.scss";

import ReactSVG from "react-svg";

interface ILightBoxComponentProps {
  children: any;
  lightBoxOpen: boolean;
  setLightBoxOpen: (isOpen: boolean) => void;
}
export const LightBoxComponent = (props: ILightBoxComponentProps) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const onClickAway = (event: any) => {
    modalRef.current && modalRef.current.contains(event.target)
      ? props.setLightBoxOpen(true)
      : props.setLightBoxOpen(false);
  };

  React.useEffect(() => {
    const onKeyDown = (event: any) => {
      event.keyCode === 27 && props.setLightBoxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [props]);

  React.useEffect(() => {
    props.lightBoxOpen &&
      document &&
      (document.documentElement.style.overflow = "hidden");

    return () => {
      typeof document !== "undefined" &&
        (document.documentElement.style.overflow = "auto");
    };
  }, [props.lightBoxOpen]);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div
          role="button"
          onClick={onClickAway}
          className={`${style["lightbox"]} ${
            props.lightBoxOpen && style["lightbox-open"]
          } `}
        >
          <span
            role={"button"}
            className={style["lightbox-close"]}
            onClick={() => props.setLightBoxOpen(false)}
          >
            <ReactSVG src={"/svg/cross.svg"} />
          </span>

          <div className={style["lightbox-container"]}>
            <div
              ref={modalRef}
              className={`${style["lightbox-content"]} ${
                props.lightBoxOpen && style["lightbox-open"]
              } `}
            >
              {props.children}
            </div>
          </div>
        </div>,
        document.body
      )}
    </React.Fragment>
  );
};
