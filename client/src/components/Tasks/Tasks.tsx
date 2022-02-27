import React, {useEffect, useState} from 'react'
import Task from './Task';
import $ from 'jquery';
import {getAllTasks} from '../../actions/tasks';
import ITasks from '../../Interfaces/tasks';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/index';

function Tasks() {

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState)=>{
    return state.reducer;
  })

  useEffect(() => {
    dispatch(getAllTasks())
  }, [dispatch])

  const renderTasks = () => {
    if(tasks instanceof Array){
      return tasks.map((task:any) => {
        return <Task
        key={task._id}
        id={task._id}
        createdAt={task.createdAt}
        completed={task.completed}
        task={task.task} />
      })
    }
  }

  return (
    <div className="tasks">
      {renderTasks()}
      hi 
    </div>
  )
}

export default Tasks