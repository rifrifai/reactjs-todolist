import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const newTask = useRef("");
  const storage = "todolist_App";
  const [tasks, setTasks] = useState(() => {
    // agar ketika direfresh data tidak hilang
    return JSON.parse(localStorage.getItem(storage)) || [];
  });

  // agar ketika direfresh data tidak hilang
  useEffect(() => {
    localStorage.setItem(storage, JSON.stringify(tasks));
  }, [tasks]);

  // membuat id
  function setId() {
    // ketika remove agar id tidak sama
    if (tasks == "") {
      return 1;
    } else {
      return tasks[0].id + 1;
    }
    // const jumlahTask = tasks.length;
    // return jumlahTask + 1;
  }

  // mengisi task
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

  // menaikan task ke atas or kebawah
  function move(currentIndex, updateIndex) {
    const currentData = tasks[currentIndex];
    const updateData = tasks[updateIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[updateIndex] = { ...updateData, id: currentData.id };

    // menampilkan data yang dinaik turunkan
    const newData = [...tasks];
    setTasks(newData);
  }

  // menghapus task
  function remove(id) {
    // membuat yakin hapus?
    if (window.confirm("Anda yakin?")) {
      setTasks(tasks.filter((item) => item.id != id));
    }
  }

  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <Todolist
        tasks={tasks}
        setCompleted={setCompleted}
        move={move}
        remove={remove}
      />
    </>
  );
}

export default App;
