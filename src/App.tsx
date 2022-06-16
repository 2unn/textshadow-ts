import { useState } from "react";
import { initValue } from "./component/Constance";

import CssView from "./Layout/CssView";
import Preview from "./Layout/Preview";
import Templates from "./Layout/Templates";
import ToolShadow from "./Layout/ToolShadow";
import { textShadowItem } from "./Layout/ToolShadow/index";
import "./App.scss";

const App = () => {
  const [textShadow, setTakeShadow] = useState<textShadowItem[]>([
    initValue("0"),
  ]);

  return (
    <div className="app-wrapper">
      <ToolShadow textShadow={textShadow} setTakeShadow={setTakeShadow} />
      <div>
        <Preview textShadow={textShadow} />
        <CssView textShadow={textShadow} />
        <Templates />
      </div>
    </div>
  );
};

export default App;
