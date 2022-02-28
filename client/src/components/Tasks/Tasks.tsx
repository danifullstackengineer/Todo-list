import React, { useEffect, useState } from "react";
import Task from "./Task";
import $ from "jquery";
import { getAllTasks } from "../../actions/tasks";
import ITasks from "../../Interfaces/tasks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
require("../../styles/Tasks.css");

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => {
    return state.reducer;
  });

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const renderTasks = () => {
    if (tasks instanceof Array) {
      return tasks.map((task: any) => {
        return (
          <Task
            key={task._id}
            id={task._id}
            nr={tasks.indexOf(task) + 1}
            createdAt={task.createdAt}
            completed={task.completed}
            task={task.task}
          />
        );
      });
    }
  };

  return (
    <div className="tasks">
      <div className="tasks__bar">
        <span className="tasks__id">ID</span>
        <span className="tasks__status">Status</span>
        <span className="tasks__created">Time created</span>
        <span className="tasks__task">Task</span>
      </div>
      <div className="tasks__container">
        <div className="tasks__border">{renderTasks()}</div>
      </div>
    </div>
  );
}

export default Tasks;
