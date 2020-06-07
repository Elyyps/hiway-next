import { ILink } from "../../cores/link";
import { INewletterCard } from "../../cores/newsletter-card";

export type INewsletter = {
  title: string;
  button: ILink;
  link: ILink;
  card: INewletterCard;
};
