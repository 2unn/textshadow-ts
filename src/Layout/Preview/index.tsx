import { useState } from "react";
import { changeValue } from "../../component/Constance";
import { textShadowItem } from "../ToolShadow";
import "./Preview.scss";

import Wrapper from "../../component/Wrapper";
import ColorPick from "../../component/ColorPick";

interface IPreView {
  textShadow: Array<textShadowItem>;
}

const PreView: React.FC<IPreView> = ({ textShadow }) => {
  const [textColor, setTextColor] = useState<string>("#3d9df6");
  const [backgroundColor, setBackGroundColor] = useState<string>("#ffffff");

  const shadowStyle: string = textShadow
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
    <Wrapper header={"Preview"}>
      <div>
        <div className="color-wrapper">
          <ColorPick
            getColor={setBackGroundColor}
            colorValue={backgroundColor}
          />
          <ColorPick getColor={setTextColor} colorValue={textColor} />
        </div>
        <div className="text-wrapper">
          <div
            style={{
              textShadow: shadowStyle,
              zIndex: "999",
              color: textColor,
              backgroundColor: backgroundColor,
            }}
            className="preview-text"
          >
            Hello
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PreView;
