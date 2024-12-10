import React from 'react';
import Task from './Task';

const TaskColumn = ({ title, tasks, onUpdateStatus }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="space-y-2">
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;