import { ILink } from "../../cores/link";
import { IDescriptionCard } from "../../cores/description-card";

export type IOurFocus = {
  title: string;
  content: string;
  links: ILink[];
  descriptionCards: IDescriptionCard[];
  images: string[];
};
