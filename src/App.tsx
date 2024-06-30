import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import TodoList from "./components/TodoList/TodoList";
import todoImg from "../public/self-made-man.png"
import { useTranslation } from 'react-i18next';


export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
}

const App = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [editTodo, setEditTodo] = useState<TodoInterface | null>(null);
  const [todoFilterValue, setTodoFilterValue] = useState("all");

  const getTodoFilterValue = (filterValue: string) =>
    setTodoFilterValue(filterValue);
  const getEditTodo = (editTodo: TodoInterface) => setEditTodo(editTodo);

  const { t, i18n } = useTranslation();
  const [firstState, setFirstState] = useState(true);
  const [secondState, setSecondState] = useState(false);
  const ChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setFirstState(!firstState);
    setSecondState(!secondState);
  }
  return (
    <main className="app">
      <div className="app__wrapper">
      <div className="container">
        <div className="btn">
          <button className={firstState ? "ar active" : "ar"} onClick={() => ChangeLanguage("ar")}>العربية</button>
          <button className={secondState ? "en active" : "en"} onClick={() => ChangeLanguage("en")}>English</button>
        </div>
        <div className="txt">
          <h2>{t('Todo_App')}</h2>
        </div>
      </div>
        <div className="app__header">
        </div>
        <div className="app__inputs-box">
          {editTodo?.id ? (
            <EditTodo editTodo={editTodo} setEditTodo={setEditTodo} />
          ) : (
            <AddTodo />
          )}
          <FilterTodo getTodoFilterValue={getTodoFilterValue} />
        </div>
        <TodoList
          todos={todos}
          todoFilterValue={todoFilterValue}
          getEditTodo={getEditTodo}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
      </div>
      <img src={todoImg} alt="todosImg" className="todos-img"/>
    </main>
  );
};

export default App;
