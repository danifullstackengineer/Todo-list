import React from "react";
import { useState } from "react";
import {AddTask, RemoveAllTasks} from '../../actions/tasks';
import {useDispatch} from 'react-redux';

function AddTasks() {

  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    dispatch(AddTask({
      task: task
    }));
    setTask('');
  }
  const removeAll = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    dispatch(RemoveAllTasks())
  }

  return (
    <div className="addtask">
      <form onSubmit={handleSubmit}>
        <div className="addtask__task">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Enter new Task..."
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add</button>
        <button onClick={removeAll}>Remove All</button>
      </form>
    </div>
  );
}

export default AddTasks;
