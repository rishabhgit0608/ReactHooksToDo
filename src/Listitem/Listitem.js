import React from "react";

const Listitem = (props) => {
  const items = props.items;
  console.log(items);
  const ListItem = items.map((item) => {
    return (
      <div className="listitem" key={item.key}>
        <p>{item.text}</p>
      </div>
    );
  });
  return <div className="allList">{ListItem}</div>;
};

export default Listitem;
