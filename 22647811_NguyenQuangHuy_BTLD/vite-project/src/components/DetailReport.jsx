// components/DetailReport.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import img from "../data/img/Avatar.png";
import ViewModal from './ViewModal'; // Import ViewModal

const DetailReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State cho modal thêm người dùng
  const [selectedReport, setSelectedReport] = useState(null);
  const [editedReport, setEditedReport] = useState({});
  const [newUser, setNewUser] = useState({ // State cho dữ liệu người dùng mới
    name: '',
    company: '',
    value: '',
    date: '',
    status: 'New', // Giá trị mặc định
  });

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
    setEditedReport({ ...report });
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedReport(null);
    setEditedReport({});
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
    setNewUser({ name: '', company: '', value: '', date: '', status: 'New' }); // Reset form
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedReport({ ...editedReport, [name]: value });
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:2004/reports/${selectedReport.id}`, editedReport);
      const response = await axios.get('http://localhost:2004/reports');
      setReports(response.data);
      setIsEditModalOpen(false);
      setSelectedReport(null);
      setEditedReport({});
      alert('Lưu thông tin thành công!');
    } catch (error) {
      console.error('Lỗi khi lưu báo cáo:', error);
      alert('Đã xảy ra lỗi khi lưu thông tin.');
    }
  };

  const handleSaveNewUser = async () => {
    try {
      await axios.post('http://localhost:2004/reports', newUser);
      const response = await axios.get('http://localhost:2004/reports');
      setReports(response.data);
      setIsAddModalOpen(false);
      setNewUser({ name: '', company: '', value: '', date: '', status: 'New' }); // Reset form sau khi thêm thành công
      alert('Thêm người dùng thành công!');
    } catch (error) {
      console.error('Lỗi khi thêm người dùng:', error);
      alert('Đã xảy ra lỗi khi thêm người dùng.');
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
    <div className="bg-white p-6 rounded-lg shadow-sm relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Detailed report</h2>
        <div className="space-x-2">
          <button
            className="px-4 py-2 border border-pink-500 text-pink-500 rounded hover:bg-pink-50"
            onClick={handleOpenAddModal} // Mở modal thêm người dùng
          >
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
      <ViewModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        report={editedReport}
        onInputChange={handleEditInputChange}
        onSave={handleSaveEdit}
        title="Chỉnh sửa thông tin người dùng" // Thêm title prop
        isEdit={true} // Thêm prop để phân biệt chế độ chỉnh sửa
      />

      {/* Modal thêm người dùng */}
      <ViewModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        report={newUser}
        onInputChange={handleAddInputChange}
        onSave={handleSaveNewUser}
        title="Thêm người dùng mới" // Title cho modal thêm người dùng
        isEdit={false} // Prop để phân biệt chế độ thêm mới
      />
    </div>
  );
};

export default DetailReport;