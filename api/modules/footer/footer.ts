import { ISocialMedia } from "../../cores/social-media";

export type IFooter = {
  contactTitle: string;
  contacts: string[];
  mediaTitle: string;
  mediaTitleMobile: string;
  medias: ISocialMedia[];
};
