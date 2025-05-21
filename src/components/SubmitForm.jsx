import React, { useState } from "react";

export const SubmitForm = ({ setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos((prev) => [
      ...prev,
      {
        id: self.crypto.randomUUID(),
        title: inputValue,
        completed: false,
      },
    ]);
    console.log(inputValue);

    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="todo"
        type="text"
        placeholder="Add todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
