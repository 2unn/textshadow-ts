import { ReactElement, ReactHTMLElement } from "react";

export function hexToRgbA(hex: string, opacity: string) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      `,${+opacity / 100})`
    );
  }
  throw new Error("Bad Hex");
}

const initShiftRight = "0";
const initShiftDown = "0";
const initBlur = "5";
const initOpacity = "20";
const initColorShadow = "#000";

const changeValue = (
  shiftright: string,
  shiftdown: string,
  blur: string,
  opacity: string,
  color: string
) => {
  return `${hexToRgbA(
    color,
    opacity
  )} ${shiftright}px ${shiftdown}px ${blur}px`;
};

function getParent(element: React.MouseEvent<HTMLElement>, selector: string) {
  let elementResult;
  while (element.currentTarget.parentElement) {
    if (element.currentTarget.parentElement.localName === selector) {
      return (elementResult = element.currentTarget.parentElement);
    }
    elementResult = element.currentTarget.parentElement;
  }
}

const initValue = function (id: string) {
  return {
    id: id,
    shiftright: initShiftRight,
    shiftdown: initShiftDown,
    blur: initBlur,
    opacity: initOpacity,
    color: initColorShadow,
  };
};

const initShadow = changeValue(
  initShiftRight,
  initShiftDown,
  initBlur,
  initOpacity,
  initColorShadow
);

export {
  initShiftRight,
  initShiftDown,
  initBlur,
  initOpacity,
  initColorShadow,
  initShadow,
  initValue,
  changeValue,
  getParent,
};
