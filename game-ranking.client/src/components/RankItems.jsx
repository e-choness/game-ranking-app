import React, { useState, useEffect } from "react";
import GameCovers from "@/components/GameCovers.jsx";
import RankingGrid from "./RankingGrid";
import "@/css/ranking.css";

const RankItems = () => {
  const [items, setItems] = useState([]);
  const dataType = 1;

  function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log("onDragStart() target id: " + event.target.id);
  }

  function OnDragOver(event) {
    console.log("OnDragOver() target id: " + event.target.id);
    event.preventDefault();
  }

  function onDrop(event) {
    event.preventDefault();
    const targetElment = event.target;
    if (targetElment.nodeName === "IMG") {
      return false;
    }

    if (targetElment.childNodes.length === 0) {
      var data = parseInt(event.dataTransfer.getData("text").substring(5));
      const transformedCollection = items.map((item) =>
        item.id === parseInt(data)
          ? { ...item, ranking: parseInt(targetElment.id.substring(5)) }
          : { ...item, ranking: item.ranking }
      );
      setItems(transformedCollection);
    }
  }

  useEffect(() => {
    fetch(`item/${dataType}`)
      .then((results) => results.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main>
      <RankingGrid
        items={items}
        images={GameCovers}
        onDrop={onDrop}
        onDragOver={OnDragOver}
        onDragStart={onDragStart}
      />
      <div className="items-not-ranked">
        {items.length > 0 ? (
          <div className="unranked-cell">
            {items.map((item) => (
              <img
                id={`item-${item.imageId}`}
                src={GameCovers.find((gc) => gc.id === item.imageId)?.image}
                style={{ cursor: "pointer" }}
                draggable="true"
                onDragStart={onDragStart}
              />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </main>
  );
};

export default RankItems;
