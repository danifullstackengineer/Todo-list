import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetTask } from "../../actions/tasks";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import Task from "./Task";
import { UpdateTask } from "../../actions/tasks";
import { Link } from "react-router-dom";
require("../../styles/Update.css");

function Update() {
  const { id } = useParams();

  const task = useSelector((state: RootState) => {
    return state.reducer;
  });

  const [newTask, setNewTask] = useState("");

  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTask(id));
  }, [dispatch]);
  useEffect(() => {
    if (task.completed) {
      setDisabled(true);
    }
  }, [task.completed]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(e.target.value);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    dispatch(
      UpdateTask({
        id: id,
        task: newTask,
        createdAt: task.createdAt,
        completed: task.completed,
      })
    );
    setNewTask("");
  };

  const handleComplete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (!task.completed) {
      dispatch(
        UpdateTask({
          id: id,
          task: task.task,
          createdAt: task.createdAt,
          completed: true,
        })
      );
    }
    setNewTask("");
    setDisabled(true);
  };

  return (
    <div className="update">
      <div className="update__content">
        <div className="update__current">
          {task ? (
            <Task
              key={task._id}
              id={task._id}
              createdAt={task.createdAt}
              completed={
                typeof task.completed === "boolean"
                  ? task.completed
                  : task.completed === "true"
                  ? true
                  : false
              }
              task={task.task}
              update={true}
            />
          ) : null}
        </div>
        <div className="update__next">
          <input
            className="update__nextInput"
            placeholder="ex: Walk the cat..."
            value={newTask}
            onChange={handleChange}
            disabled={disabled}
          ></input>
          <button
            className="update__updatebtn"
            onClick={handleClick}
            disabled={disabled}
          >
            Update Task
          </button>
          <button
            disabled={disabled}
            className={`update__completebtn`}
            onClick={handleComplete}
          >
            Complete Task
          </button>
        </div>
      </div>
      <div className="update__returnbtn">
        <Link to="/">Tasks</Link>
      </div>
    </div>
  );
}

export default Update;
