import { ILink } from "./link";

export type ISection = {
  postion: "center" | "left" | "bottom";
  backgroundImage: string;
  title: string;
  content?: string;
  button?: ILink;
  link?: ILink;
  variant: "primary" | "secondary";
  subTitle?: string;
  textFullLength?: boolean;
};
