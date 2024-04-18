import { useState } from "react";

function ListGroup() {
  let items = ["Skyrim", "BioShock", "Prey", "Deus Ex", "Ultima"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No game found.</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((game, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={game}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {game}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
