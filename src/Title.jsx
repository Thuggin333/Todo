import React from "react";

export default function Title({ todo }) {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      <p>{todo.title}</p>
    </div>
  );
}
