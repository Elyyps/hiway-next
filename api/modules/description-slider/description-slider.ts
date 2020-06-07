import { IDescriptionCard } from "../../cores/description-card";
import { ILink } from "../../cores/link";

export type IDescriptionSlider = {
  descriptionCards: IDescriptionCard[];
  pictures: string[];
  content: string;
  link: ILink;
  variant: "primary" | "secondary";
};
