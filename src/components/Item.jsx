import React from "react";

export const Item = ({ item, setTodos }) => {
  const completeTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  return (
    <li id={item.id} className="todo-item">
      <button className="item-left" onClick={completeTodo}>
        <p style={item.isCompleted ? { textDecoration: "line-through" } : {}}>
          {item.title}
        </p>
      </button>
      <div className="item-right">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};
