import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import img from "../data/img/Avatar.png";



const DetailReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [editedReport, setEditedReport] = useState({});

  // Lấy dữ liệu từ json-server
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:2004/reports');
        setReports(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const handleEdit = (report) => {
    setSelectedReport(report);
    setEditedReport({ ...report }); // Sao chép thông tin ban đầu vào state chỉnh sửa
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedReport(null);
    setEditedReport({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedReport({ ...editedReport, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:2004/reports/${selectedReport.id}`, editedReport);
      // Sau khi lưu thành công, cập nhật lại danh sách báo cáo
      const response = await axios.get('http://localhost:2004/reports');
      setReports(response.data);
      setIsEditModalOpen(false);
      setSelectedReport(null);
      setEditedReport({});
      alert('Lưu thông tin thành công!'); // Hoặc hiển thị thông báo khác
    } catch (error) {
      console.error('Lỗi khi lưu báo cáo:', error);
      alert('Đã xảy ra lỗi khi lưu thông tin.');
    }
  };

  // Định nghĩa cột cho DataTable
  const columns = [
    {
      name: 'NAME',
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => (
        <div className="flex items-center">
          <img src={img} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
          {row.name}
        </div>
      ),
    },
    {
      name: 'COMPANY',
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: 'ORDER VALUE',
      selector: (row) => row.value,
      sortable: true,
    },
    {
      name: 'DATE',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'STATUS',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => {
        const getStatusColor = (status) => {
          switch (status) {
            case 'New':
              return 'text-blue-500';
            case 'In-progress':
              return 'text-yellow-500';
            case 'Completed':
              return 'text-green-500';
            default:
              return 'text-gray-500';
          }
        };
        return <span className={getStatusColor(row.status)}>{row.status}</span>;
      },
    },
    {
      name: '',
      cell: (row) => (
        <span className="text-gray-400">
          <button onClick={() => handleEdit(row)}>✏️</button>
        </span>
      ),
      width: '50px',
    },
  ];

  // Custom styles cho DataTable
  const customStyles = {
    headCells: {
      style: {
        color: '#6B7280',
        fontWeight: '500',
        padding: '0.75rem', // p-3
      },
    },
    cells: {
      style: {
        padding: '0.75rem', // p-3
      },
    },
    rows: {
      style: {
        borderTop: '1px solid #E5E7EB', // border-t
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm relative"> {/* Thêm relative để định vị tuyệt đối cho modal */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Detailed report</h2>
        <div className="space-x-2">
          <button className="px-4 py-2 border border-pink-500 text-pink-500 rounded hover:bg-pink-50">
            Add User
          </button>
        </div>
      </div>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={reports}
        progressPending={loading}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10]}
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
      />

      {/* Modal chỉnh sửa */}
      {isEditModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Chỉnh sửa thông tin</h2>
            {selectedReport && (
              <div>
                <div className="mb-2">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Tên:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={editedReport.name || ''}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Công ty:</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={editedReport.company || ''}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="value" className="block text-gray-700 text-sm font-bold mb-2">Giá trị đơn hàng:</label>
                  <input
                    type="text"
                    id="value"
                    name="value"
                    value={editedReport.value || ''}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Ngày:</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={editedReport.date || ''}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Trạng thái:</label>
                  <select
                    id="status"
                    name="status"
                    value={editedReport.status || ''}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="New">New</option>
                    <option value="In-progress">In-progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            )}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleSave}
                className="bg-green-700 hover:bg-green-700 text-green-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 hover:bg-gray-400 text-red-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailReport;