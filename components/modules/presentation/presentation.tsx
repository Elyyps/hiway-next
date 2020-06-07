import React from "react";
import style from "./presentation.module.scss";
import { IPresentation } from "../../../api/modules/presentation/presentation";
import ReactSVG from "react-svg";
//import ReactPlayer from "react-player";

interface IPresentationComponentProps {
  presentation: IPresentation;
}
const PresentationComponent = (props: IPresentationComponentProps) => {
  const [windowSize, setWindowSize] = React.useState(0);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  React.useEffect(() => {
    handleResize();
  }, [windowSize]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={style["presentation"]}>
      <div className="container">
        <div
          className={style["presentation-video"]}
          style={{
            height:
              windowSize < 639
                ? windowSize / 1.63
                : windowSize > 639 && windowSize < 800
                ? "310px"
                : windowSize / 3.26,
          }}
        >
          <img src={props.presentation.video} alt="close zoom on laptop" />
          <div>
            <ReactSVG src={props.presentation.icon} />
            <span>{props.presentation.videoTitle}</span>
          </div>

          {/* <ReactPlayer
            url={props.presentation.video}
            width={"100%"}
            height={
              windowSize < 639
                ? windowSize / 1.63
                : windowSize > 639 && windowSize < 800
                ? "290px"
                : windowSize / 3.26
            }
            controls
          /> */}
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
