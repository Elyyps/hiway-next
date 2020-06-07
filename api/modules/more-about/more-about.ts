import { IMediumCard } from "../../cores/medium-card";
import { ILink } from "../../cores/link";

export type IMoreAbout = {
  cards: IMediumCard[];
  title: string;
  link: ILink;
  icon: string;
};
