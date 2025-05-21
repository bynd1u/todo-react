import React from "react";

export const SubmitForm = ({ setTodos }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos((prev) => [
      ...prev,
      {
        id: self.crypto.randomUUID(),
        title: event.target.todo.value,
        completed: false,
      },
    ]);

    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input id="todo" type="text" placeholder="Add todo" />
      <button>Submit</button>
    </form>
  );
};
