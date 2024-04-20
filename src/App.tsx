import Button from "./components/Button";

function App() {
  let color = "primary";
  return (
    <div>
      <Button onClick={() => console.log("Clicked.")}>Little Button</Button>
    </div>
  );
}

export default App;
