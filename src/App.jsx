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

  function setCompleted(id) {
    let taskItem = [];
    tasks.map((item, index) => {
      if (item.id == id) {
        taskItem[index] = { ...item, completed: !item.completed };
      } else {
        taskItem[index] = item;
      }
    });
    setTasks(taskItem);
    // console.info(tasks);
  }

  function move(currentIndex, updateIndex) {
    const currentData = tasks[currentIndex];
    const updateData = tasks[updateIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[updateIndex] = { ...updateData, id: currentData.id };

    // menampilkan data yang dinaik turunkan
    const newData = [...tasks];
    setTasks(newData);
    console.info(newData);
  }

  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <Todolist tasks={tasks} setCompleted={setCompleted} move={move} />
    </>
  );
}

export default App;
