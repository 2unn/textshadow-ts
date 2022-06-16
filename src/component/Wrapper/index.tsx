import { ReactElement } from "react";
import "./Wrapper.scss";

interface IWrapper {
  header: string;
  children: React.ReactNode;
}

function Wrapper({ header, children }: IWrapper) {
  return (
    <div className="wrapper-wrapper">
      {header && <div className="wrapper-header">{header}</div>}
      {children}
    </div>
  );
}

export default Wrapper;
