import { FunctionComponent } from "react";

export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  view: any;
  showInNav: boolean;
}
