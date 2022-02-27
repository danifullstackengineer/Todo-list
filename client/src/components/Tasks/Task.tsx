import React from "react";
import ITasks from "../../Interfaces/tasks";
import { RemoveTask } from "../../actions/tasks";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Task(props: ITasks) {
  const { id, createdAt, completed, task, update } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(RemoveTask(id));
  };

  const updateTask = () => {};

  return (
    <div className="task">
      id: {id},createdat: {createdAt}, completed:
      {completed ? "finished" : "ongoing"}, task:{task}
      {!update ? (
        <>
          <button id={id} onClick={handleRemove}>
            Remove Task
          </button>
          <Link to={`/updateTask/${id}`}>
            <button id={id} onClick={updateTask}>
              Update Task
            </button>
          </Link>
        </>
      ) : undefined}
    </div>
  );
}

export default Task;
