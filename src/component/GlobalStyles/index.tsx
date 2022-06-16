import { ReactElement } from "react";
import "./GlobalStyles.scss";

interface IGlobalStyles {
  children: ReactElement;
}

const GlobalStlyles: React.FC<IGlobalStyles> = ({ children }) => {
  return children;
};

export default GlobalStlyles;
