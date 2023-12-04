import React, { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import RemoveTodo from "./components/RemoveTodo";
import RemoveFromComplited from "./components/RemoveFromComplited";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(null);
  }, [tasks]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length + doneTasks.length + 1,
      value: inputValue,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleRemoveTask = useCallback((id) => {
    setTasks((tasks) => {
      setDoneTasks((doneTasks) => [
        ...doneTasks,
        tasks.find((task) => task.id === id),
      ]);

      return tasks.filter((task) => task.id !== id);
    });
  }, []);

  const doneTaskRemove = useCallback((id) => {
    setDoneTasks((doneTasks) =>
      doneTasks.filter((doneTask) => doneTask.id !== id)
    );
  }, []);
  return (
    <div className="wrapper-todo">
      <div className="todo-heading">
        <h1>TO DO APP</h1>
      </div>
      <div className="todo-input">
        <form onSubmit={handleAddTask}>
          <input
            ref={inputRef}
            type="text"
            placeholder="ADD TASKS HERE"
            onChange={onChange}
            value={inputValue}
          />
          <button disabled={inputValue === ""} type="sumbit">
            ADD{" "}
          </button>
        </form>
      </div>
      <div className="task-container">
        <div className="tasks-todo">
          {tasks.map((task) => (
            <RemoveTodo
              key={task.id}
              id={task.id}
              value={task.value}
              action={handleRemoveTask}
            />
          ))}
        </div>
        <div className="tasks-done">
          {doneTasks.map((dt) => (
            <RemoveFromComplited
              key={dt.id}
              id={dt.id}
              value={dt.value}
              action={doneTaskRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
