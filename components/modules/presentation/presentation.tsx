import React from "react";
import style from "./presentation.module.scss";
import { IPresentation } from "../../../api/modules/presentation/presentation";
import ReactSVG from "react-svg";
import ScreenWidthContext from "../../../context/screen-width";
//import ReactPlayer from "react-player";

interface IPresentationComponentProps {
  presentation: IPresentation;
}
const PresentationComponent = (props: IPresentationComponentProps) => {
  const { windowSize } = React.useContext(ScreenWidthContext);

  return (
    <div className={style["presentation"]}>
      <div className="container">
        <div
          className={style["presentation-video"]}
          style={{
            height:
              windowSize > 960
                ? windowSize / 3.26
                : windowSize > 639 && windowSize < 960
                ? windowSize / 2.5
                : windowSize / 1.63,
          }}
        >
          <img src={props.presentation.video} alt="close zoom on laptop" />
          <div>
            <a
              href={props.presentation.videoTitle.url}
              target="__blank"
              rel="nofollow"
            >
              <ReactSVG src={props.presentation.icon} />
              <span>{props.presentation.videoTitle.text}</span>
            </a>
          </div>
        </div>
        <div className={style["presentation-content"]}>
          <h2 className="title">{props.presentation.title}</h2>
          <div className="divider" />
          <p>{props.presentation.content}</p>
        </div>
      </div>
    </div>
  );
};
export default PresentationComponent;
