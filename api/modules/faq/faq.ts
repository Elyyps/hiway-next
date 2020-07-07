import { ITitleContent } from "../../cores/title-content";
import { ILink } from "../../cores/link";

export type IFAQ = {
  title: string;
  items: ITitleContent[];
  description: string;
  descriptionLink: ILink;
};
