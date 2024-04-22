import React from "react";

const Item = (item, images, onDragStart) => {
  return (
    <div className="unranked-cell">
      {
        <img
          id={`item-${item.id}`}
          src={images.find((img) => img.id === item.imageId)?.image}
          style={{ cursor: "pointer" }}
          draggable="true"
          onDragStart={onDragStart}
        />
      }
    </div>
  );
};

export default Item;
