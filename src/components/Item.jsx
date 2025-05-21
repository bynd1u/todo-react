import React, { useEffect, useRef, useState } from "react";

export const Item = ({ item, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef(null);

  const completeTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== item.id));
  };

  useEffect(() => {
    if (isEdit && inputRef) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [isEdit]);

  const handleInputSumbit = () => {
    setIsEdit(false);
  };

  const handleInputChange = (e) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleInputBlur = () => {
    setIsEdit(false);
  };

  return (
    <li id={item.id} className="todo-item">
      {isEdit ? (
        <form className="input-form" onSubmit={handleInputSumbit}>
          <input
            ref={inputRef}
            type="text"
            defaultValue={item.title}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </form>
      ) : (
        <>
          <button className="item-left" onClick={completeTodo}>
            <p
              style={item.isCompleted ? { textDecoration: "line-through" } : {}}
            >
              {item.title}
            </p>
          </button>
          <div className="item-right">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};
