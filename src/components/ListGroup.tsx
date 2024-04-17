function ListGroup() {
  const games = ["Skyrim", "BioShock", "Prey", "Deus Ex", "Ultima"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {games.map((game) => (
          <li key={game}>{game}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
