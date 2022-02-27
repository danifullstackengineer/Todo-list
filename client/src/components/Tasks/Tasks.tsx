import React, {useEffect, useState} from 'react'
import Task from './Task';
import $ from 'jquery';
import {getAllTasks} from '../../actions/tasks';
import ITasks from '../../Interfaces/tasks';
import {initialState} from '../../reducers/tasks';

function Tasks() {

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <div className="tasks">
      <Task/>
    </div>
  )
}

export default Tasks