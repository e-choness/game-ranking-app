import React, { useState, useEffect } from "react";
import GameCovers from "@/components/GameCovers.jsx";
import RankingGrid from "./RankingGrid";
import ItemCollection from "./ItemCollection";
import "@/css/ranking.css";

const RankItems = () => {
  const [items, setItems] = useState([]);
  const dataType = 1;

  const [reload, setReload] = useState(false);

  const localStorageKey = "rpg";

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

  function getDataFromServer() {
    fetch(`item/${dataType}`)
      .then((results) => results.json())
      .then((data) => setItems(data));
  }

  useEffect(() => {
    if (items == null) getDataFromServer();
  }, [dataType]);

  function OnClickReload() {
    setReload(true);
  }

  useEffect(() => {
    if (items != null) {
      localStorage.setItem(localStorageKey, JSON.stringify(items));
    }
    setReload(false);
  }, [items]);

  useEffect(() => {
    if (reload == true) {
      getDataFromServer();
    }
  }, [reload]);

  return items != null ? (
    <main>
      <div className="h1">What Do you Love About These Games?</div>
      <RankingGrid
        items={items}
        images={GameCovers}
        onDrop={onDrop}
        onDragOver={OnDragOver}
        onDragStart={onDragStart}
      />
      <ItemCollection
        items={items}
        images={GameCovers}
        onDragStart={onDragStart}
      ></ItemCollection>
      <button className="button-reload" onClick={OnClickReload}>
        <span className="text">Reload</span>
      </button>
    </main>
  ) : (
    <main>Loading...</main>
  );
};

export default RankItems;
