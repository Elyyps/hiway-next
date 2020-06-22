import React from "react";
import style from "./footer.module.scss";
import ReactSVG from "react-svg";
import { IFooter } from "../../../api/modules/footer/footer";
import DropdownComponent from "../../cores/dropdown/dropdown";
import { LanguageContext } from "../../../context/language";

interface IFooterComponentProps {
  footer: IFooter;
}
const FooterComponent = (props: IFooterComponentProps) => {
  const { selectLanguage, language } = React.useContext(LanguageContext);
  const [isClosed, setIsClosed] = React.useState(false);

  const onLanguageSelected = (text: string) => {
    setIsClosed(!isClosed);
    selectLanguage(text);
  };
  return (
    <div className={` ${style["footer"]} container`}>
      <div className={style["footer-top"]}>
        <div className={style["footer-left"]}>
          <h2>{props.footer.contactTitle}</h2>
          <ul>
            {props.footer.contacts.map((contact, key) => (
              <li key={key}>
                {contact.url ? (
                  <a href={contact.url} target="__blank" rel="nofollow">
                    {contact.text}
                  </a>
                ) : (
                  contact.text
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={style["footer-right"]}>
          <h2 className="uk-visible@s">{props.footer.mediaTitle}</h2>
          <h2 className="uk-hidden@s">{props.footer.mediaTitleMobile}</h2>
          <ul>
            {props.footer.medias.map((media, key) => (
              <li key={key}>
                <div>
                  <ReactSVG src={media.icon} />
                </div>

                <a
                  href={media.link.url ? media.link.url : ""}
                  target="__blank"
                  rel="nofollow"
                >
                  {media.link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style["footer-bottom"]}>
        <span>Ⓒ Hiway - 2020</span>
        <div className="uk-visible@s">
          <span>Language :</span>
          <DropdownComponent
            title={language === "EN" ? "English" : "Dutch"}
            variant="primary"
            position="top"
          >
            <ul>
              <li onClick={() => onLanguageSelected("EN")}>English</li>
              <li onClick={() => onLanguageSelected("NL")}>Dutch</li>
            </ul>
          </DropdownComponent>
        </div>
      </div>
    </div>
  );
};
export default FooterComponent;
