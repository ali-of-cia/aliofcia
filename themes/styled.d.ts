import {} from "styled-components";
import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    colors: {
      amber: string;
      yellow: string;
      mauve: string;
      purple: string;
      white: string;
      lilac: string;
      offBlack: string;
    };
    textShadow: string;
  } // extends the global DefaultTheme with our ThemeType.
}
