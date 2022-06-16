import "./ColorPick.scss";
import { memo } from "react";

interface IColorPick {
  colorValue: string;
  getColor: (value: string) => void;
}

const ColorPick: React.FC<IColorPick> = ({ colorValue, getColor }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    getColor(e.target.value);
  }

  return (
    <div className="colorPick-wrapper">
      <input onChange={handleChange} value={colorValue} type="color"></input>
    </div>
  );
};

export default memo(ColorPick);
