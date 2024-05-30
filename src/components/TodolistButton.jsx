function TodolistButton(props) {
  // menampilkan emoticon telunjuk atas dan bawah
  let id = props.id;
  let currentIndex = props.tasks.findIndex((item) => item.id == id);
  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  let prevButton = "";
  if (props.tasks[prevIndex] != undefined) {
    prevButton = "👆";
  }

  let nextButton = "";
  if (props.tasks[nextIndex] != undefined) {
    nextButton = "👇";
  }
  return (
    <>
      <span>
        <button>{prevButton}</button>
      </span>
      <span>
        <button>{nextButton}</button>
      </span>
      <span>
        <button>🗑️</button>
      </span>
    </>
  );
}

export default TodolistButton;
