import React from 'react';

const Task = ({ task, onUpdateStatus }) => {
  const handleStatusChange = (newStatus) => {
    onUpdateStatus(task.id, newStatus);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-md font-medium mb-1">{task.title}</h3>
      <div className="flex justify-end space-x-2">
        {task.status !== 'todo' && (
          <button 
            className="text-gray-500 hover:text-gray-700" 
            onClick={() => handleStatusChange('todo')}
          >
            To Do
          </button>
        )}
        {task.status !== 'doing' && (
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => handleStatusChange('doing')}
          >
            Doing
          </button>
        )}
        {task.status !== 'done' && (
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => handleStatusChange('done')}
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;