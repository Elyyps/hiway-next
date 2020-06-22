import { ISocialMedia } from "../../cores/social-media";
import { ILink } from "../../cores/link";

export type IFooter = {
  contactTitle: string;
  contacts: ILink[];
  mediaTitle: string;
  mediaTitleMobile: string;
  medias: ISocialMedia[];
};
