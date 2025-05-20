import React from "react";

export const SubmitForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add todo" />
      <button>Submit</button>
    </form>
  );
};
