import { ILink } from "../../cores/link";
import { IDescriptionCard } from "../../cores/description-card";
import { ITitleContent } from "../../cores/title-content";

export type IOurFocus = {
  descriptions: ITitleContent[];
  links: ILink[];
  descriptionCards: IDescriptionCard[];
  images: string[];
};
