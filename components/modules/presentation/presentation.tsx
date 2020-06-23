import React from "react";
import style from "./presentation.module.scss";
import { IPresentation } from "../../../api/modules/presentation/presentation";
import ReactSVG from "react-svg";
import ScreenWidthContext from "../../../context/screen-width";
import { ShareSocialComponent } from "../../cores/share-social/share-social.component";

interface IPresentationComponentProps {
  presentation: IPresentation;
}
const PresentationComponent = (props: IPresentationComponentProps) => {
  const { windowSize } = React.useContext(ScreenWidthContext);

  return (
    <div className={style["presentation"]}>
      <div className="container">
        <div>
          <div
            className={style["presentation-video"]}
            style={{
              height:
                windowSize > 960
                  ? windowSize / 3.5
                  : windowSize > 639 && windowSize < 960
                  ? windowSize / 2.5
                  : windowSize / 1.8,
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
            <div>
              <ShareSocialComponent
                title=""
                nameSocialShare="Request a demo"
                subject="I would like to request an HR platform Demo"
                url=""
              />
            </div>
          </div>
        </div>
        {props.presentation.beta && (
          <span className={style["beta"]}>
            <img src={"/img/optimized/hiway.jpg"} alt="logo icon" />
            {props.presentation.beta}
          </span>
        )}
      </div>
      <br />
    </div>
  );
};
export default PresentationComponent;
