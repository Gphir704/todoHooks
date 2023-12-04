import React, { memo } from "react";

const RemoveFromComplited = ({ id, value, action }) => {
  console.log(` DELEETED TASK ${value}`);
  return (
    <div>
      <h3 id={id} className="task-done">
        {" "}
        {id} {value} <button onClick={() => action(id)}> Remove </button>
      </h3>
    </div>
  );
};

export default memo(RemoveFromComplited);
