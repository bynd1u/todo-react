import "./ToDoList.css";
import { Item } from "./Item";

export const ToDoList = ({ items, setTodos }) => {
  return (
    <ol className="todo-list">
      {items.map((item, index) => (
        <Item key={index} item={item} setTodos={setTodos} />
      ))}
    </ol>
  );
};
