import React from 'react';

const DetailReport = () => {
  const data = [
    { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New', statusColor: 'text-blue-500' },
    { name: 'Carlos Garcia', company: 'SnoozeShift', value: '$747', date: '24/07/2023', status: 'New', statusColor: 'text-blue-500' },
    { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress', statusColor: 'text-yellow-500' },
    { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress', statusColor: 'text-yellow-500' },
    { name: 'Ryan Young', company: 'DataStream Inc.', value: '$759', date: '01/09/2023', status: 'Completed', statusColor: 'text-green-500' },
    { name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/09/2023', status: 'Completed', statusColor: 'text-green-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Detailed report</h2>
        <div className="space-x-2">
          <button className="px-4 py-2 border border-pink-500 text-pink-500 rounded hover:bg-pink-50">
            Import
          </button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">CUSTOMER NAME</th>
              <th className="p-3">COMPANY</th>
              <th className="p-3">ORDER VALUE</th>
              <th className="p-3">DATE</th>
              <th className="p-3">STATUS</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 flex items-center">
                  <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                  {row.name}
                </td>
                <td className="p-3">{row.company}</td>
                <td className="p-3">{row.value}</td>
                <td className="p-3">{row.date}</td>
                <td className="p-3">
                  <span className={row.statusColor}>{row.status}</span>
                </td>
                <td className="p-3">
                  <span className="text-gray-400">✏️</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500">63 results</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">{'<'}</button>
          <button className="px-3 py-1 bg-pink-500 text-white rounded">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">4</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">...</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">10</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">11</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default DetailReport;