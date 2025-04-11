import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <span className="absolute left-2 top-2 text-gray-400">🔍</span>
        </div>
        <span className="text-gray-400">🔔</span>
        <img src="https://via.placeholder.com/40" alt="User avatar" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;