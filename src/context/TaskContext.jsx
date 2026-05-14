import React, {
  createContext,
  useEffect,
  useState,
} from "react";

/*
  Create global context
*/
export const TaskContext = createContext();

function TaskProvider({ children }) {

  /*
    Global tasks state
  */
  const [tasks, setTasks] = useState([]);

  /*
    Search term state
  */
  const [searchTerm, setSearchTerm] = useState("");

  /*
    Fetch tasks on page load
  */
  useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then((r) => r.json())
      .then((data) => setTasks(data));
  }, []);

  /*
    Add new task
  */
  function addTask(newTask) {

    fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((r) => r.json())
      .then((createdTask) => {

        /*
          Update UI after POST request
        */
        setTasks([...tasks, createdTask]);
      });
  }

  /*
    Toggle task completion
  */
  function toggleComplete(task) {

    fetch(`http://localhost:6001/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    })
      .then((r) => r.json())
      .then((updatedTask) => {

        /*
          Update task within state
        */
        const updatedTasks = tasks.map((task) =>
          task.id === updatedTask.id
            ? updatedTask
            : task
        );

        setTasks(updatedTasks);
      });
  }

  /*
    Filter tasks dynamically
  */
  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        toggleComplete,
        setSearchTerm,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskProvider };