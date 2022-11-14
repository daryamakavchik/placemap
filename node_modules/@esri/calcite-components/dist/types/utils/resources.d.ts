import { ThemeClass, ThemeName } from "../components/interfaces";
export declare const autoTheme = "calcite-theme-auto";
export declare const darkTheme = "calcite-theme-dark";
interface Theme {
  name: ThemeName;
  className: ThemeClass;
}
export declare const THEMES: Theme[];
export declare const CSS_UTILITY: {
  autoTheme: string;
  darkTheme: string;
  lightTheme: string;
  rtl: string;
};
export declare const TEXT: {
  loading: string;
};
export {};
