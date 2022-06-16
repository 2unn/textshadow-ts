import { ReactElement } from "react";
import "./GlobalStyles.scss";

interface IGlobalStyles {
  children: ReactElement;
}

function GlobalStlyles({ children }: IGlobalStyles) {
  return children;
}

export default GlobalStlyles;
