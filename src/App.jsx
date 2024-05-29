import { useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const newTask = useRef("");
  function addTask(parameter) {
    parameter.preventDefault();
    console.info(`I'm Clicked value ${newTask.current.value} `);
  }
  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <Todolist />
    </>
  );
}

export default App;
