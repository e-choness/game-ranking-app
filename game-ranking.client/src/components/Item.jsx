import React from "react";

const Item = ({ item, imgObj, onDragStart }) => {
  return (
    <div className="unranked-cell">
      <img
        key={`item-${item.id}`}
        id={`item-${item.id}`}
        src={imgObj?.image}
        style={{ cursor: "pointer" }}
        draggable="true"
        onDragStart={onDragStart}
      />
    </div>
  );
};

export default Item;
