import React, { useState } from "react";

function AddTask(props) {
  const [Task, setTask] = useState({});
  let key, value;
  const handleInput = (e) => {
    key = e.target.name;
    value = e.target.value;
    setTask({ ...Task, [key]: value });
  };
  const addTask = async (e) => {
    const { description, completed } = Task;
    console.log(description, completed, "desc", "completed");
    document.getElementById("addform").reset();
    const res = await fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, completed }),
    });

    if (res.status === 200) {
      window.alert("Task added successfully");
      props.triggerFetch();
    }
  };

  return (
    <div className="task-input-card">
      <form method="POST" id="addform">
        <div className="card-header">Add Task here!</div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            Description:{" "}
            <input
              name="description"
              onChange={handleInput}
              type="text"
              autoComplete="off"
            ></input>
          </li>
          <li className="list-group-item">
            Completed :{" "}
            <input
              name="completed"
              onChange={handleInput}
              type="text"
              placeholder="true/false"
              autoComplete="off"
            ></input>
          </li>
          <li className="list-group-item">
            <button onClick={addTask} type="button" className="btn btn-success">
              Add Task
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AddTask;
