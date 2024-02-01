// App.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
 
