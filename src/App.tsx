import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Skyrim", "BioShock", "Prey", "Deus Ex", "Ultima"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Games"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
