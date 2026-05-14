import React, {
  useContext,
  useId,
  useState,
} from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForm() {

  const { addTask } = useContext(TaskContext);

  /*
    Controlled input state
  */
  const [title, setTitle] = useState("");

  /*
    Generate accessible unique ID
  */
  const inputId = useId();

  function handleSubmit(e) {
    e.preventDefault();

    /*
      Create new task object
    */
    const newTask = {
      title,
      completed: false,
    };

    /*
      Add task using context
    */
    addTask(newTask);

    /*
      Reset input field
    */
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>

      {/* Accessible label */}
      <label htmlFor={inputId}>
        Task Name
      </label>

      <input
        id={inputId}
        type="text"
        value={title}
        placeholder="Add a new task..."
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;