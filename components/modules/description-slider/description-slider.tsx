import React from "react";
import style from "./description-slider.module.scss";
import { IDescriptionSlider } from "../../../api/modules/description-slider/description-slider";
import LinkComponent from "../../cores/link/link";
import DescriptionCardComponent from "../../cores/description-card/description-card";
import ReactSVG from "react-svg";

interface IDescriptionSliderComponentProps {
  descriptionSlider: IDescriptionSlider[];
  isHr?: boolean;
  isFreelance?: boolean;
}

const DescriptionSliderComponent = ({
  descriptionSlider,
  isHr,
  isFreelance,
}: IDescriptionSliderComponentProps) => {
  const [selectedTab, setSelectedTab] = React.useState<number>(
    isHr ? 0 : isFreelance ? 1 : 0
  );
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

  const displayCards = () => {
    return (
      <div className={style["description-slider-cards"]}>
        {descriptionSlider[selectedTab].descriptionCards.map((card, key) => (
          <div key={key}>
            <DescriptionCardComponent
              {...card}
              variant={descriptionSlider[selectedTab].variant}
              iconSize={windowSize}
            />
          </div>
        ))}
      </div>
    );
  };
  const imageRatioDesktop = windowSize * 0.28;
  const imageRatioIpad = windowSize * 0.5;

  return (
    <div className={` ${style["description-slider"]} container`}>
      <div className={style["description-slider-left"]}>
        <h2 className="title">
          {!isFreelance && (
            <span
              onClick={() => setSelectedTab(0)}
              style={
                selectedTab === 0
                  ? {
                      color: `var(--primary-color  )`,
                      textDecoration: "underline",
                    }
                  : { color: "black", opacity: "0.1" }
              }
            >
              HR platform
            </span>
          )}
          {!isHr && (
            <span
              className="title"
              onClick={() => setSelectedTab(1)}
              style={
                selectedTab === 1
                  ? {
                      color: `var(--secondary-color)`,
                      textDecoration: "underline",
                    }
                  : { color: "black", opacity: "0.1" }
              }
            >
              Freelance platform
            </span>
          )}
        </h2>

        <div className={"divider"} />

        <div className={style["description-slider-content"]}>
          {descriptionSlider[selectedTab].content}
          <LinkComponent
            to={""}
            animated
            icon={"/icons/chevron-right.svg"}
            variant={descriptionSlider[selectedTab].variant}
          >
            {descriptionSlider[selectedTab].link.text}
          </LinkComponent>
        </div>
        <div className={"uk-visible@m"}>{displayCards()}</div>
      </div>
      <div
        className={style["description-slider-right"]}
        style={
          windowSize < 960
            ? {
                height: `${windowSize * 0.8}px`,
              }
            : {}
        }
      >
        {!isFreelance && !isHr && (
          <div className={style["arrows"]}>
            <span
              className="button"
              onClick={() => setSelectedTab(0)}
              style={{ opacity: selectedTab === 0 ? "0.2" : "" }}
            >
              <ReactSVG src={"/icons/chevron-right.svg"} />
            </span>
            <span
              className="button"
              onClick={() => setSelectedTab(1)}
              style={{ opacity: selectedTab === 1 ? "0.2" : "" }}
            >
              <ReactSVG src={"/icons/chevron-right.svg"} />
            </span>
          </div>
        )}
        {descriptionSlider[selectedTab].pictures.map((picture, key) => (
          <div
            key={key}
            style={
              windowSize > 960
                ? {
                    width: `${imageRatioDesktop}px`,
                    height: `${imageRatioDesktop / 1.75}px`,
                  }
                : {
                    width: `${imageRatioIpad}px`,
                    height: `${imageRatioIpad / 1.8}px`,
                  }
            }
            className={`${style[`description-slider-image`]} ${
              style[`description-slider-image-${key}`]
            } `}
          >
            <img src={picture} alt="sceenshot from the website" />
          </div>
        ))}
      </div>

      <div className={"uk-hidden@m"} style={{ marginTop: "46px" }}>
        {displayCards()}
      </div>
    </div>
  );
};
export default DescriptionSliderComponent;
