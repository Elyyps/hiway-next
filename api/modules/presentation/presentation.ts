import { ILink } from "../../cores/link";

export type IPresentation = {
  title: string;
  video: string;
  videoTitle: ILink;
  content: string;
  icon: string;
  beta?: string;
  buttonName: string;
  emailSubject: string;
};
