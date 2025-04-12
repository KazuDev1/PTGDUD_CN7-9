import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./style.css";
import SidebarImg from "../data/img/SidebarImg.png";


const Sidebar = () => {
  const location = useLocation(); // Hook để lấy thông tin về đường dẫn hiện tại

  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
      {/* Logo and Menu */}
      <div>
        <div className="text-2xl font-bold text-pink-500 mb-6">LOGO</div>
        <nav>
          <ul className="space-y-2 ">
            <li
              className={`hover:bg-pink-500 rounded hover-text ${location.pathname === "/dashboard" || location.pathname === "/" ? "bg-pink-500" : ""
                }`}
            >
              <Link to="/dashboard" className="flex items-center px-4 py-2">
                <span className={`${location.pathname === "/dashboard" || location.pathname === "/" ? "text-white" : ""}`}>📊 Dashboard</span>
              </Link>
            </li>
            <li
              className={`hover:bg-pink-500 rounded hover-text ${location.pathname === "/projects" ? "bg-pink-500" : ""
                }`}
            >
              <Link to="/projects" className="flex items-center px-4 py-2">
                <span className={`${location.pathname === "/projects" ? "text-white" : ""}`}>📁 Projects</span>
              </Link>
            </li>
            <li
              className={`hover:bg-pink-500 rounded hover-text ${location.pathname === "/teams" ? "bg-pink-500" : ""
                }`}
            >
              <Link to="/teams" className="flex items-center px-4 py-2">
                <span className={`${location.pathname === "/teams" ? "text-white" : ""}`}>👥 Teams</span>
              </Link>
            </li>
            <li
              className={`hover:bg-pink-500 rounded hover-text ${location.pathname === "/analytics" ? "bg-pink-500" : ""
                }`}
            >
              <Link to="/analytics" className="flex items-center px-4 py-2">
                <span className={`${location.pathname === "/analytics" ? "text-white" : ""}`}>📈 Analytics</span>
              </Link>
            </li>
            <li
              className={`hover:bg-pink-500 rounded hover-text ${location.pathname === "/messages" ? "bg-pink-500" : ""
                }`}
            >
              <Link to="/messages" className="flex items-center px-4 py-2">
                <span className={`${location.pathname === "/messages" ? "text-white" : ""}`}>💬 Messages</span>
              </Link>
            </li>
            <li
              className={`hover:bg-pink-500 rounded hover-text ${location.pathname === "/integrations" ? "bg-pink-500" : ""
                }`}
            >
              <Link to="/integrations" className="flex items-center px-4 py-2">
                <span className={`${location.pathname === "/integrations" ? "text-white" : ""}`}>🔗 Integrations</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Ad Section */}
      <div className="bg-[#eff6ff] p-4 rounded-lg text-center">
        <img
          src={SidebarImg}
          alt="Ad illustration"
          className="mx-auto mb-10 rounded-md"
        />
        <p className="text-lg font-extrabold text-gray-700">V2.0 is available</p>
        <button className='btn-custom'>
          <p className='text-blue-400'>Try now</p>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;