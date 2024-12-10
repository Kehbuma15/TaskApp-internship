import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design new landing page', status: 'todo' },
    { id: 2, title: 'Develop feature X', status: 'doing' },
    { id: 3, title: 'Write technical documentation', status: 'done' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, status: 'todo' }]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8">
      <div className="mb-6 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={openModal}
        >
          Add Task
        </button>
      </div>
      <TaskModal isOpen={isModalOpen} onClose={closeModal} onAddTask={addTask} />
      <div className="grid grid-cols-3 gap-4">
        <TaskColumn
          title="To Do"
          tasks={tasks.filter(task => task.status === 'todo')}
          onUpdateStatus={updateTaskStatus}
        />
        <TaskColumn
          title="Doing"
          tasks={tasks.filter(task => task.status === 'doing')}
          onUpdateStatus={updateTaskStatus}
        />
        <TaskColumn
          title="Done"
          tasks={tasks.filter(task => task.status === 'done')}
          onUpdateStatus={updateTaskStatus}
        />
      </div>
    </div>
  );
};

export default TaskBoard;