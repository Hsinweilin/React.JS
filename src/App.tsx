import ListGroup from "./Components/ListGroup"; //now we can use this as normal HTML component
import Alert from "./Components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
