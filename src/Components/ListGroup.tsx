//import { Fragment } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item: string) => void
  onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //can't return more than one element
    //empty bracket in react means a Fragment component
    <>
      <h1>{heading}</h1>
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
              setSelectedIndex(index); //set selectedIndex = index
              onSelectItem(item)
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
