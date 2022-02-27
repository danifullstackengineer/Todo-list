import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetTask } from "../../actions/tasks";
import ITasks from "../../Interfaces/tasks";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import Task from "./Task";
import { UpdateTask } from "../../actions/tasks";

function Update() {
  const { id } = useParams();

  const task = useSelector((state: RootState) => {
    return state.reducer;
  });

  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTask(id));
  }, [dispatch]);

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

  const handleComplete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    if(!task.completed){
      dispatch(UpdateTask({
        id: id,
        task: task.task,
        createdAt: task.createdAt,
        completed: true
      }))
    }
    setNewTask("");
  }

  return (
    <div className="update">
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
        ></input>
        <button onClick={handleClick}>Update Task</button>
        <button onClick={handleComplete}></button>
      </div>
    </div>
  );
}

export default Update;
