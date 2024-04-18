import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Skyrim", "BioShock", "Prey", "Deus Ex", "Ultima"];
  return (
    <div>
      <ListGroup items={items} heading="Games" />
    </div>
  );
}

export default App;
