import "./styles.css";

export default function App() {
  const handleAdd = () => {};
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="line2">
        <div>0 tasks to complete</div>
        <div className="endline2">
          <input type="checkbox" />
          Show Completed
        </div>
      </div>
      <ul>
        <li>UwU</li>
      </ul>
      <p>
        Task Name: <input placeholder="Enter Task ." />{" "}
        <button onClick={handleAdd}>Add a Task</button>
      </p>
    </div>
  );
}
