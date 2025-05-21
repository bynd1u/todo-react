import React from "react";

export const Summary = ({ completedTodos, totalTodos }) => {
  return (
    <div>
      {completedTodos}/{totalTodos}
    </div>
  );
};
