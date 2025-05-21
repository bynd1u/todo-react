import "./Summary.css";

export const Summary = ({ completedTodos, totalTodos }) => {
  return (
    <div>
      {completedTodos}/{totalTodos}
    </div>
  );
};
