import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
      {/* Logo and Menu */}
      <div>
        <div className="text-2xl font-bold text-pink-500 mb-6">LOGO</div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 bg-pink-100 text-pink-500 rounded">
                <span className="mr-2">📊</span> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
                <span className="mr-2">📁</span> Projects
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
                <span className="mr-2">👥</span> Teams
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
                <span className="mr-2">📈</span> Analytics
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
                <span className="mr-2">💬</span> Messages
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
                <span className="mr-2">🔗</span> Integrations
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Ad Section */}
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <img src="https://via.placeholder.com/150" alt="Ad illustration" className="mx-auto mb-2" />
        <p className="text-sm font-semibold">V2.0 is available</p>
        <button className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
          Try now
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;