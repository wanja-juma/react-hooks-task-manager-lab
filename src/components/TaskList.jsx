import React, { useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const { tasks, toggleComplete } =
    useContext(TaskContext);

  return (
    <div>

      {tasks.map((task) => (

        <div key={task.id}>

          <h3>{task.title}</h3>

          <p>
            {task.completed
              ? "Completed"
              : "Pending"}
          </p>

          <button
            data-testid={task.id}
            onClick={() => toggleComplete(task)}
          >
            {task.completed
              ? "Undo"
              : "Complete"}
          </button>

        </div>

      ))}

    </div>
  );
}

export default TaskList;