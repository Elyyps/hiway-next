import { ILink } from "./link";
import { IDropdownLink } from "./dropdown-link";

export type INavItem = {
  title: ILink;
  dropdownLink?: IDropdownLink[];
  dropdownText?: string;
  dropdownTitle?: string;
};
