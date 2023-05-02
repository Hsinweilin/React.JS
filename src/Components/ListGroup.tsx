//import { Fragment } from "react";
import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //can't return more than one element
    //empty bracket in react means a Fragment component
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active:"
                : "list-group item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);//selectedIndex = index
            }} //handleClick
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
