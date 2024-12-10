import React from 'react';
import { FaTasks, FaCalendar, FaProjectDiagram, FaCog, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const menuItems = [
    { icon: <FaTasks />, name: 'Tasks', path: '/tasks' },
    { icon: <FaCalendar />, name: 'Calendar', path: '/calendar' },
    { icon: <FaProjectDiagram />, name: 'Projects', path: '/projects' },
    { icon: <FaCog />, name: 'Settings', path: '/settings' },
  ];

  return (
    <div
      className={`
        bg-gray-800 text-white h-screen fixed left-0 top-0 z-10
        transition-width duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-20'}
      `}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`
              flex items-center p-4 cursor-pointer hover:bg-gray-700 transition
              ${isExpanded ? 'justify-start' : 'justify-center'}
            `}
          >
            <span className="text-2xl mr-4">{item.icon}</span>
            {isExpanded && <span>{item.name}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;