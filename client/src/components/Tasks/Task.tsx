import React, {useEffect, useState} from "react";
import ITasks from "../../Interfaces/tasks";
import { RemoveTask } from "../../actions/tasks";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
require("../../styles/Task.css");

function Task(props: ITasks) {
  const { id, createdAt, completed, task, update, nr } = props;

  const dispatch = useDispatch();

  const [className, setClassName] = useState('')

  useEffect(() => {
    if (update) {
      setClassName("task__completedUpdate");
    } else {
      setClassName("");
    }
  },[update])

  const handleRemove = () => {
    dispatch(RemoveTask(id));
  };

  const getDate = () => {
    var date = new Date();
    if (createdAt) {
      date = new Date(createdAt);
    }
    var dateStr = "";
    if (date !== undefined) {
      dateStr +=
        date.getUTCDate() +
        "/" +
        (date.getUTCMonth() + 1) +
        "/" +
        date.getUTCFullYear();
    }
    return dateStr;
  };

  return (
    <div className="task">
      <div className="task__info">
        <span className="task__number">{nr}</span>
        <span className={`task__completed ${className}`}>
          {completed ? "Finished" : "On going"}
        </span>
        <span className="task__created">{getDate()}</span>
        <span className={`task__task ${className}`}>{task}</span>
      </div>
      <div className="task__buttonsDiv">
        {!update ? (
          <>

            <button id={id} onClick={handleRemove}>
              Remove Task
            </button>
            <Link to={`/updateTask/${id}`}>
              <button>
                Update Task
              </button>
            </Link>
          </>
        ) : undefined}
      </div>
    </div>
  );
}

export default Task;
