import React from "react";
import "../Listitem/Listitem.css";
const Listitem = (props) => {
  const items = props.items;
  const ListItem = items.map((item) => {
    return (
      <div className="listitem" key={item.key}>
        <p>{item}</p>
      </div>
    );
  });
  return <div className="allList">{ListItem}</div>;
};

export default Listitem;
