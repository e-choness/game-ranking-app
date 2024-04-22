import React from "react";
import Item from "./Item";

const ItemCollection = ({ items, images, onDragStart }) => {
  return (
    <div className="item-not-ranked">
      {items.map((item) =>
        item.ranking === 0 ? (
          <Item
            key={`item-${item.id}`}
            item={item}
            images={images}
            onDragStart={onDragStart}
          />
        ) : null
      )}
    </div>
  );
};

export default ItemCollection;
