import React from 'react'
import Tasks from './Tasks/Tasks';
import AddTask from './Tasks/AddTasks';
require('../styles/Body.css');

function Body() {
  return (
    <div className="body">
      <>
      <Tasks/>
      <AddTask/>
      </>

    </div>
  )
}

export default Body