import { useEffect, useState } from "react";


import {
  initShiftRight,
  initShiftDown,
  initBlur,
  initOpacity,
  initColorShadow,
  initValue,
} from "../../component/Constance";
import Wrapper from "../../component/Wrapper";
import Slider from "./Slider";
import ColorPick from "../../component/ColorPick";
import LayerItem from "./LayerItem";

import "./ToolShadow.scss";

export interface textShadowItem {
  id: string;
  shiftright: string;
  shiftdown: string;
  blur: string;
  opacity: string;
  color: string;
}
interface IToolShadow {
  textShadow: Array<textShadowItem>;
  setTakeShadow: React.Dispatch<React.SetStateAction<textShadowItem[]>>;
}

const ToolShadow: React.FC<IToolShadow> = ({ textShadow, setTakeShadow }) => {
  const [currentId, setCurrentId] = useState<string>("0");
  const [shiftright, setShiftright] = useState<string>(initShiftRight);
  const [shiftdown, setShiftDown] = useState<string>(initShiftDown);
  const [blur, setBlur] = useState<string>(initBlur);
  const [opacity, setOpacity] = useState<string>(initOpacity);
  const [color, setColor] = useState<string>(initColorShadow);

  useEffect(() => {
    setTakeShadow((pre) => {
      pre.forEach((val, i) => {
        if (i.toString() === currentId) {
          pre[i].shiftright = shiftright;
          pre[i].shiftdown = shiftdown;
          pre[i].blur = blur;
          pre[i].opacity = opacity;
          pre[i].color = color;
        }
      });
      return [...pre];
    });
  }, [shiftright, shiftdown, blur, opacity, color]);

  useEffect(() => {
    if (textShadow[+currentId]) {
      setShiftright(textShadow[+currentId].shiftright);
      setShiftDown(textShadow[+currentId].shiftdown);
      setBlur(textShadow[+currentId].blur);
      setOpacity(textShadow[+currentId].opacity);
      setColor(textShadow[+currentId].color);
    } else if (currentId !== "0") {
      setShiftright(textShadow[+currentId - 1].shiftright);
      setShiftDown(textShadow[+currentId - 1].shiftdown);
      setBlur(textShadow[+currentId - 1].blur);
      setOpacity(textShadow[+currentId - 1].opacity);
      setColor(textShadow[+currentId - 1].color);
    } else {
      setShiftright(textShadow[0].shiftright);
      setShiftDown(textShadow[0].shiftdown);
      setBlur(textShadow[0].blur);
      setOpacity(textShadow[0].opacity);
      setColor(textShadow[0].color);
    }
  }, [currentId]);

  // function deleteItem(id: string) {
  //   setCurrentId((+id - 1).toString());
  //   setTakeShadow((pre) => {
  //     const newValue = pre.filter((val, i) => i !== +id);
  //     return newValue;
  //   });
  // }

  function handleAddLayer() {
    setTakeShadow((pre) => [...pre, initValue(pre.length.toString())]);
  }

  return (
    <Wrapper header={"Text-Shadow CSS Generator"}>
      <Slider
        value={shiftright}
        takeTextShadow={setShiftright}
        max="50"
        min="-50"
        label={"Shift right"}
      />
      <Slider
        value={shiftdown}
        takeTextShadow={setShiftDown}
        max="50"
        min="-50"
        label={"Shift down"}
      />
      <Slider
        value={blur}
        takeTextShadow={setBlur}
        max="100"
        min="0"
        label={"Blur"}
      />
      <Slider
        value={opacity}
        takeTextShadow={setOpacity}
        max="100"
        min="0"
        label={"Opacity"}
      />
      <div className="colorpick-wrapper">
        <ColorPick getColor={setColor} colorValue={color} />
      </div>
      <div className="add_layer">
        <button onClick={handleAddLayer} className="add_layer-btn">
          Add Layer
        </button>
        <div className="layer-list">
          <ul>
            {textShadow.map((val, i) => {
              return (
                <LayerItem
                  getId={setCurrentId}
                  deleteItem={setTakeShadow}
                  id={i.toString()}
                  active={currentId === i.toString()}
                  key={i}
                  value={val}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default ToolShadow;
