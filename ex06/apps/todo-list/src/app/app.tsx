import React, { useState } from 'react';
import TaskList from './TaskList'

type Task = {
  id: number;
  label: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, label: 'Buy groceries', completed: false },
    { id: 2, label: 'Walk the dog', completed: true },
    { id: 3, label: 'Read a book', completed: false },
    { id: 4, label: 'Clean the house', completed: false },
  ]);


  return (
    <div className="container">
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
