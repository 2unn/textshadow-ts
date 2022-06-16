import { changeValue } from "../../component/Constance";
import { textShadowItem } from "../ToolShadow";
import "./CssView.scss";

import Wrapper from "../../component/Wrapper";

interface ICssView {
  textShadow: Array<textShadowItem>;
}
function CssView({ textShadow }: ICssView) {
  const shadowStyle = textShadow
    .map((val) => {
      return changeValue(
        val.shiftright,
        val.shiftdown,
        val.blur,
        val.opacity,
        val.color
      );
    })
    .join(",");

  return (
    <Wrapper header="Css Preview">
      <div className="CssPreview-wrapper">Text-shadow: {shadowStyle}</div>
    </Wrapper>
  );
}

export default CssView;
