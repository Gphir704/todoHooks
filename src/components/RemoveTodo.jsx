import React, { memo } from "react";

const RemoveTodo = ({ id, value, action }) => {
  console.log(`ADDED TASKS ${value}`);
  return (
    <div>
      <h3 id={id} className="task-todo">
        {" "}
        {id} : {value} <button onClick={() => action(id)}> DONE </button>
      </h3>
    </div>
  );
};

export default memo(RemoveTodo);
