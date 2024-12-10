import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskBoard from './components/TaskBoard';

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex">
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className={`
      ml-${isSidebarExpanded ? '64' : '20'} 
      w-full 
      p-8
    `}> <TaskBoard /></div>
     
    </div>
  );
};

export default App;