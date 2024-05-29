import { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const newTask = useRef("");
  const [tasks, setTasks] = useState([]);

  // membuat id
  function setId() {
    const jumlahTask = tasks.length;
    return jumlahTask + 1;
  }

  function addTask(parameter) {
    parameter.preventDefault();
    // code mewajibkan isi value
    if (newTask.current.value === "") {
      alert("Silahkan di isi!");
      return false;
    }
    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false,
    };
    // menghilangkan isi form setelah dikirimkan
    newTask.current.value = "";

    setTasks([...tasks, data]);
    // console.info(tasks);
    // console.info(`I'm Clicked, value = ${newTask.current.value} `);
  }
  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <Todolist tasks={tasks} />
    </>
  );
}

export default App;
