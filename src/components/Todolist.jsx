import TodolistButton from "./TodolistButton";

function Todolist({ tasks }) {
  // membuat urutan yang terbaru paling atas
  tasks.sort((a, b) => b.id - a.id);

  return (
    <div className="wrapper">
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.id}>
              <div className="left">
                <button>✅</button>
              </div>
              <div className="center">{item.task}</div>
              <div className="right">
                <TodolistButton />
              </div>
            </li>
          );
        })}
        {/* <li>
          <div className="left">
            <button>✅</button>
          </div>
          <div className="center">bbb</div>
          <div className="right">
            <TodolistButton />
          </div>
        </li>
        <li>
          <div className="left">
            <button>◻️</button>
          </div>
          <div className="center">aaa</div>
          <div className="right">
            <TodolistButton />
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default Todolist;
