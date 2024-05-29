import { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const newTask = useRef("");
  const [tasks, setTasks] = useState([]);

  function addTask(parameter) {
    parameter.preventDefault();
    // code mewajibkan isi value
    if (newTask.current.value === "") {
      alert("Silahkan di isi!");
      return false;
    }
    const data = {
      id: 1,
      task: newTask.current.value,
      completed: false,
    };
    setTasks(data);
    console.info(tasks);
    // console.info(`I'm Clicked, value = ${newTask.current.value} `);
  }
  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <Todolist />
    </>
  );
}

export default App;
