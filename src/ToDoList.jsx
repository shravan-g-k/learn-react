import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([ ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);

  }

  function addTask() {
    if(newTask !== "") {
    setTask(t => [...task, newTask]);
    setNewTask("");
    }

  }
  function delteTask(index) {
    setTask(t => t.filter((task, i) => i !== index));
  }

  function moveTaskUp(index) {
    if(index > 0) {
      const updatedTasks = [...task];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTask(updatedTasks);
        }
  }

  function moveTaskDown(index) {
    if(index < task.length - 1) {
      const updatedTasks = [...task];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTask(updatedTasks);
    }

  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <input type="text" onChange={handleInputChange} value={newTask} placeholder="Add a task" />
      <button className="add-button" onClick={addTask}>Add</button>
      <ol>
        {task.map(
          (task, index) =>
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => delteTask(index)}>Delete</button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>⬆️</button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>⬇️</button>
            </li>)}
      </ol>
    </div>
  );
}

export default ToDoList;