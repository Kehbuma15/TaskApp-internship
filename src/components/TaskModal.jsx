import React, { useState } from 'react';

const TaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [newTask, setNewTask] = useState({ title: '' });

  const handleInputChange = (e) => {
    setNewTask({ title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title.trim() !== '') {
      onAddTask(newTask);
      onClose();
      setNewTask({ title: '' });
    }
  };

  return (
    <div
      className={`
        fixed z-10 inset-0 overflow-y-auto ${
          isOpen ? 'block' : 'hidden'
        }
      `}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add New Task
            </h3>
            <form onSubmit={handleSubmit} className="mt-4">
              <div>
                <label
                  htmlFor="task-title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="task-title"
                    id="task-title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter task title"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;