import React, { useState, useEffect } from "react";
import GameCovers from "@/components/GameCovers.jsx";
import RankingGrid from "./RankingGrid";
import "@/css/ranking.css";

const RankItems = () => {
  const [items, setItems] = useState([]);
  const dataType = 1;

  useEffect(() => {
    fetch(`item/${dataType}`)
      .then((results) => results.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main>
      <RankingGrid items={items} images={GameCovers} />
      <div className="items-not-ranked">
        {items.length > 0 ? (
          <div className="unranked-cell">
            {items.map((item) => (
              <img
                id={`item-${item.imageId}`}
                src={GameCovers.find((gc) => gc.id === item.imageId).image}
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
