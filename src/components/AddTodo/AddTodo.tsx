import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/todo";
import { validateTask } from "../../validation";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleAddTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateTask(task);
    if (error) {
      setError(error);
      return;
    } else {
      dispatch(addTodo({ task, id: uuidv4(), completed: false }));
      setTask("");
    }
  };

  const handleUpdateTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    const error = validateTask(task);
    if (error) {
      setError(error);
    } else {
      setError("");
    }
  };

  return (
    <form onSubmit={handleAddTaskSubmit} className="form">
      <div className="form__control">
        <input
          onChange={handleUpdateTodoChange}
          value={task}
          type="text"
          className="form__input"
          placeholder="Add todo..."
        />
        {error && <p className="form__error-text">{error}</p>}
      </div>
      <button className="btn form__btn">Add Todo</button>
    </form>
  );
};

export default AddTodo;
