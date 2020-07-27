import React from "react";
import style from "./presentation.module.scss";
import { IPresentation } from "../../../api/modules/presentation/presentation";
import ReactSVG from "react-svg";
import ScreenWidthContext from "../../../context/screen-width";
import { ShareSocialComponent } from "../../cores/share-social/share-social.component";
import ButtonComponent from "../../cores/button/button";

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
                body=""
                subject={props.presentation.emailSubject}
                url=""
              >
                <ButtonComponent
                  title={props.presentation.buttonName}
                  variant="primary"
                  icon={"/svg/chevron-right.svg"}
                />
              </ShareSocialComponent>
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
