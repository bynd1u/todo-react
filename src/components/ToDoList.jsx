import React from "react";
import { Item } from "./Item";

export const ToDoList = ({ items }) => {
  return (
    <ol className="todo-list">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ol>
  );
};
