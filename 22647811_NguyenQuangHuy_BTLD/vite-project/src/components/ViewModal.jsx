// components/ViewModal.js
import React from 'react';

const ViewModal = ({ isOpen, onClose, report, onInputChange, onSave, title, isEdit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">{title}</h2> {/* Sử dụng prop title */}
        <div>
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Tên:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={report.name || ''}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Công ty:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={report.company || ''}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="value" className="block text-gray-700 text-sm font-bold mb-2">Giá trị đơn hàng:</label>
            <input
              type="text"
              id="value"
              name="value"
              value={report.value || ''}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Ngày:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={report.date || ''}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Trạng thái:</label>
            <select
              id="status"
              name="status"
              value={report.status || ''}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onSave}
            className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isEdit ? 'bg-green-700 hover:bg-green-700 text-green-500' : 'bg-blue-700 hover:bg-blue-700 text-green-500'
            }`}
          >
            {isEdit ? 'Save' : 'Add'} {/* Thay đổi text nút tùy theo chế độ */}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-red-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;