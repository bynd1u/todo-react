import "./App.css";
import Header from "./components/Header";
import { SubmitForm } from "./components/SubmitForm";
import { ToDoList } from "./components/ToDoList";

const items = [
  { id: 1, title: "Task1" },
  { id: 2, title: "Task2" },
  { id: 3, title: "task3" },
];

function App() {
  return (
    <>
      <Header />
      <SubmitForm />
      <ToDoList items={items} />
    </>
  );
}

export default App;
