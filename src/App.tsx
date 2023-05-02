import ListGroup from "./Components/ListGroup"; //now we can use this as normal HTML component

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
