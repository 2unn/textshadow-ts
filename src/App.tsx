import { useState } from "react";
import {
  initValue,
} from "./component/Constance";
import "./App.scss";

import CssView from "./Layout/CssView";
import Preview from "./Layout/Preview";
import Templates from "./Layout/Templates";
import ToolShadow from "./Layout/ToolShadow";

function App() {
  const [textShadow, setTakeShadow] = useState([initValue('0')]);
  

  return (
    <div className="app-wrapper">
      <ToolShadow textShadow={textShadow} setTakeShadow={setTakeShadow}/>
      <div>
        <Preview textShadow={textShadow}/>
        <CssView textShadow={textShadow}/>
        <Templates />
      </div>
    </div>
  );
}

export default App;
