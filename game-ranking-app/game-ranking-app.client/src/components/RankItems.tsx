import { useEffect, useState } from "react";

interface Item {
  id: number;
  title: string;
  imageId: number;
  rank: number;
  dataType: number;
}

const RankItems = () => {
  const [items, setItems] = useState<Item[]>();
  const dataType = 1;

  useEffect(() => {
    fetch("item$/{dataType}")
      .then((result) => result.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <main>
      {items.length === 0 ? (
        items.map((i) => <h3 key={i.id}>{i.title}</h3>)
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default RankItems;
