import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import { TodoList } from "./components/TodoList";
import { InputField } from "./components/InputField";
import "./App.css";

export const App = () => {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  // const addTodo = () => {
  //   if (text.trim().length) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: new Date().toISOString(),
  //         text,
  //         completed: false,
  //       },
  //     ]);
  //     setText("");
  //   }
  // };

  const toggleTodoComlete = (todoId) => {};

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
};
