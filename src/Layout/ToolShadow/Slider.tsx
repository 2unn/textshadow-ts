import React from "react";
import { memo } from "react";

import "./ToolShadow.scss";

interface ISlider {
  label: string;
  value: string;
  takeTextShadow: React.Dispatch<React.SetStateAction<string>>;
  min: string;
  max: string;
}

function Slider({ label, takeTextShadow, value, min, max }: ISlider) {
  let sliderWidth;
  if (min === "0") {
    sliderWidth = value;
  } else {
    sliderWidth = (+value + 50).toString();
  }

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    takeTextShadow(e.target.value);
  }

  return (
    <div className="slider-wrapper">
      <label className="slider-label" htmlFor="slider-range">
        {label}
      </label>
      <div className="slider-field">
        <input
          onChange={handleSliderChange}
          id="slider-range"
          style={{
            background: ` linear-gradient(
                90deg,
                rgb(92, 106, 196) ${sliderWidth}%,
                rgb(196, 205, 213) ${sliderWidth}%
              )`,
          }}
          className="slider-range"
          type="range"
          value={value}
          min={min}
          max={max}
          step="1"
        />
        <div
          style={{
            left: `${sliderWidth}%`,
            transform: `translateX(-${sliderWidth}%)`,
          }}
          className="slider-value"
        >
          {value}
        </div>
      </div>
    </div>
  );
}

export default memo(Slider);
