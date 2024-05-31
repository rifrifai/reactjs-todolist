import TodolistButton from "./TodolistButton";

function Todolist({ tasks, setCompleted, move }) {
  // membuat urutan yang terbaru paling atas
  tasks.sort((a, b) => b.id - a.id);

  return (
    <div className="wrapper">
      <ul>
        {tasks.map((item) => {
          // let radioCompleted = item.completed == false ? "◻️" : "✅";
          let classCompleted = "";
          let radioCompleted = "";
          if (item.completed == false) {
            radioCompleted = "◻️";
          } else {
            radioCompleted = "✅";
            classCompleted = "strike";
          }
          return (
            <li key={item.id}>
              <div className="left">
                <button onClick={() => setCompleted(item.id)}>
                  {radioCompleted}
                </button>
              </div>
              <div className={`center ${classCompleted}`}>{item.task}</div>
              <div className="right">
                <TodolistButton id={item.id} tasks={tasks} move={move} />
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
