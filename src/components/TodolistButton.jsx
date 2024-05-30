function TodolistButton(props) {
  let id = props.id;
  let currentIndex = props.tasks.findIndex((item) => item.id == id);
  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  if (props.tasks[prevIndex] != undefined) {
    console.info(`${id} ada previous index`);
  } else {
    console.info(`${id} tidak ada previous index`);
  }
  return (
    <>
      <span>
        <button>👆</button>
      </span>
      <span>
        <button>👇</button>
      </span>
      <span>
        <button>🗑️</button>
      </span>
    </>
  );
}

export default TodolistButton;
