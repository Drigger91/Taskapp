import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Taskui from "./Taskui";

function Tasks(props) {
  const [tasks, settasks] = useState([]);

  const callTasks = async () => {
    const res = await fetch("/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    settasks(data);
  };
  useEffect(() => {
    callTasks();
  }, []);
  const decodeTask = (array) => {
    return array.map((task) => {
      return (
        <Taskui triggerFetch={() => callTasks()} key={task._id} task={task} />
      );
    });
  };

  return (
    <div className="tasks">
      <AddTask triggerFetch={() => callTasks()} owner={props.owner} />

      <div>{decodeTask(tasks)}</div>
    </div>
  );
}

export default Tasks;
