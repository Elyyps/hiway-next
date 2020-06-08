import React from "react";
import style from "./more-about.module.scss";
import { IMoreAbout } from "../../../api/modules/more-about/more-about";
import LinkComponent from "../../cores/link/link";
import { MediumCardComponent } from "../../cores/medium-card/medium-card";
import SectionComponent from "../../cores/section/section";
import ReactSVG from "react-svg";

interface IMoreAboutComponent {
  moreAbout: IMoreAbout;
}
const MoreAboutComponent = ({ moreAbout }: IMoreAboutComponent) => {
  const displayMediumLink = () => {
    return (
      <span className={style["medium-link"]}>
        More on
        <LinkComponent to="" underlined>
          {moreAbout.link.text}
        </LinkComponent>
        <div>
          <ReactSVG src={moreAbout.icon} />
        </div>
      </span>
    );
  };
  return (
    <div className={style["more-about"]}>
      <div className="container">
        <div className={style["more-about-title"]}>
          <h2 className="title">{moreAbout.title}</h2>
          <div className={"uk-visible@s"}>{displayMediumLink()}</div>
        </div>
        <div className={"divider"} />
        <div className={style["more-about-content"]}>
          <div className={` ${style["more-about-big-card"]} uk-visible@m`}>
            <SectionComponent
              title={moreAbout.cards[0].title}
              backgroundImage={moreAbout.cards[0].image}
              link={moreAbout.cards[0].link}
              variant="primary"
              postion="bottom"
            />
          </div>
          <div className={style["more-about-cards"]}>
            {moreAbout.cards.slice(1, 3).map((card, key) => (
              <div key={key}>
                <MediumCardComponent {...card} />
              </div>
            ))}
          </div>
          <div className="uk-hidden@s" style={{ margin: "29px 0" }}>
            {displayMediumLink()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoreAboutComponent;
