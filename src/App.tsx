import ListGroup from "./Components/ListGroup"; //now we can use this as normal HTML component
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Press Me</Button>
    </div>
  );
}

export default App;
