import React from 'react';

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Turnover Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">TURNOVER</p>
            <h2 className="text-2xl font-bold">$92,405</h2>
            <p className="text-red-500 text-sm">-5.39% period of change</p>
          </div>
          <span className="text-pink-500 text-2xl">💰</span>
        </div>
      </div>

      {/* Profit Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">PROFIT</p>
            <h2 className="text-2xl font-bold">$32,218</h2>
            <p className="text-red-500 text-sm">-5.39% period of change</p>
          </div>
          <span className="text-blue-500 text-2xl">🛒</span>
        </div>
      </div>

      {/* New Customer Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">NEW CUSTOMER</p>
            <h2 className="text-2xl font-bold">298</h2>
            <p className="text-green-500 text-sm">+6.84% period of change</p>
          </div>
          <span className="text-blue-500 text-2xl">👤</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;