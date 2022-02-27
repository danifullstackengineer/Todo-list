import React from 'react'
import Tasks from './Tasks/Tasks';
import AddTask from './Tasks/AddTasks';

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