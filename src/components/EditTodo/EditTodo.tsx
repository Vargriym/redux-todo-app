import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo as updateTodo } from "../../redux/todo";
import { TodoInterface } from "../../App";
import { validateTask } from '../../validation'
import { useTranslation } from 'react-i18next';

type EditTodoProps = {
  editTodo: TodoInterface;
  setEditTodo: (editTodo: TodoInterface) => void;
};

const EditTodo = ({ editTodo, setEditTodo }: EditTodoProps) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(i18n.language);

  useEffect(() => {
    setTask(editTodo.task);
  }, [editTodo]);

  const handleEditTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateTask(task); 
    if (error) {
      setError(error);
      return;
    } else {
      dispatch(updateTodo({ editedTodo: { ...editTodo, task } }));
      setEditTodo({ id: "", task: "", completed: false });
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

  console.log(editTodo);
  return (
    <form onSubmit={handleEditTaskSubmit} className="form">
      <div className="form__control">
        <input
          onChange={handleUpdateTodoChange}
          value={task}
          type="text"
          className="form__input"
          placeholder={t('Edit')}
          dir={direction}
        />
        {error && <p className="form__error-text">{error}</p>}
      </div>
      <button className="btn form__btn">{t('Edit_Todo')}</button>
    </form>
  );
};

export default EditTodo;
