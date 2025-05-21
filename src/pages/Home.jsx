import { useState } from "react";
import Header from "../components/Header";
import { SubmitForm } from "../components/SubmitForm";
import { ToDoList } from "../components/ToDoList";
import { Summary } from "../components/Summary";

export const Home = () => {
  const [todos, setTodos] = useState([
    { id: self.crypto.randomUUID(), title: "Task1", isCompleted: false },
    { id: self.crypto.randomUUID(), title: "Task2", isCompleted: false },
    { id: self.crypto.randomUUID(), title: "task4", isCompleted: false },
  ]);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className="container">
      <Header />
      <Summary completedTodos={completedTodos} totalTodos={totalTodos} />
      <SubmitForm setTodos={setTodos} />
      <ToDoList items={todos} setTodos={setTodos} />
    </div>
  );
};
