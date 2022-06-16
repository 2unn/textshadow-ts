import React from "react";
import { changeValue, getParent } from "../../component/Constance";
import { textShadowItem } from "./index";
import "./ToolShadow.scss";

interface IlayerItem {
  value: textShadowItem;
  active: boolean;
  id: string;
  deleteItem: React.Dispatch<React.SetStateAction<textShadowItem[]>>;
  getId: React.Dispatch<React.SetStateAction<string>>;
}

const LayerItem: React.FC<IlayerItem> = ({
  value,
  active,
  id,
  getId,
  deleteItem,
}) => {
  const layerValue: string = changeValue(
    value.shiftright,
    value.shiftdown,
    value.blur,
    value.opacity,
    value.color
  );

  function handleOnClick() {
    getId(id);
  }

  function handleDelete(e: React.MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    if (id !== "0") {
      getId((+id - 1).toString());
      deleteItem((pre) => {
        const newValue = pre.filter((val, i) => i !== +id);
        return newValue;
      });
    } else {
      alert(`Can't Delete`);
    }
  }

  // function handleMouseDown(e: React.MouseEvent<HTMLElement>) {
  //   let dragElement = getParent(e, "li");
  //   if (dragElement) {
  //     dragElement.draggable = true;
  //   }
  // }

  // function handleMouseUp(e: React.MouseEvent<HTMLElement>) {
  //   let dragElement = getParent(e, "li");
  //   if (dragElement) {
  //     dragElement.draggable = false;
  //   }
  // }

  // function handleDragStart(e: React.DragEvent<HTMLElement>) {
  //   let dragStartIndex = e.dataTransfer.setData("dataIndex", id);
  //   e.dataTransfer.dropEffect = "move";
  // }

  // function allowDrop(e: React.DragEvent<HTMLElement>) {
  //   e.preventDefault();
  // }

  // function handleDrop(e: React.DragEvent<HTMLElement>) {
  //   let preStartIndex;
  //   if (+e.dataTransfer.getData("dataIndex") > 0) {
  //     preStartIndex = +e.dataTransfer.getData("dataIndex") - 1;
  //   } else {
  //     preStartIndex = 0;
  //   }

  //   let dropElement = getParent(e, "li") || e.target;
  //   let dragEndIndex;

  //   if (dropElement.getAttribute("data-index") > 0) {
  //     dragEndIndex = dropElement.getAttribute("data-index") - 1;
  //   } else {
  //     dragEndIndex = 0;
  //   }
  // }

  return (
    <li
      // onDrop={handleDrop}
      // onDragOver={allowDrop}
      // onDragStart={handleDragStart}
      // onMouseUp={handleMouseUp}
      // onMouseDown={handleMouseDown}
      onClick={handleOnClick}
      className={active ? "layer-item active" : "layer-item"}
    >
      <div className="layer-front">
        <span>
          <svg
            viewBox="0 0 20 20"
            className="layer-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14m6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6m0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14"></path>
          </svg>
        </span>
        {layerValue}
      </div>
      <div className="layer-back">
        <span>
          <svg
            viewBox="0 0 20 20"
            className="layer-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M17.086 2.912a3.126 3.126 0 0 0-4.414 0l-9.379 9.379a.998.998 0 0 0-.263.464l-1 4a1 1 0 0 0 1.212 1.213l4-1c.176-.044.337-.135.465-.263l9.38-9.379a3.125 3.125 0 0 0 0-4.414zm-1.414 3L15 6.584l-1.586-1.586.672-.672a1.125 1.125 0 0 1 1.586 0 1.123 1.123 0 0 1 0 1.586zM5.414 12.998L12 6.412l1.586 1.586L7 14.584l-1.586-1.586z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        <span onClick={handleDelete}>
          <svg
            viewBox="0 0 20 20"
            className="layer-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M16 6H4a1 1 0 1 0 0 2h1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1a1 1 0 1 0 0-2zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </li>
  );
};

export default LayerItem;
