import React from "react";

export const Item = ({ item }) => {
  return (
    <li id={item.id} className="todo-item">
      <button className="item-left">
        <p>{item.title}</p>
      </button>
      <div className="item-rifht">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};
