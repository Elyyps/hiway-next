import { IProgress } from "../../cores/progress";

export type IDevelopment = {
  title: string;
  items: IProgress[];
  moreInfo?: string;
};
