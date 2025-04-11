import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

// Định nghĩa cột cho DataTable
const columns = [
  {
    name: '',
    selector: (row) => row.id,
    cell: () => <input type="checkbox" />,
    width: '50px',
  },
  {
    name: 'NAME',
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => (
      <div className="flex items-center">
        <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
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
    cell: () => <span className="text-gray-400"><button>✏️</button></span>,
    width: '50px',
  },
];

const DetailReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy dữ liệu từ json-server
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:2004/reports');
        // console.log(response.data);
        setReports(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

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
    <div className="bg-white p-6 rounded-lg shadow-sm">
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
    </div>
  );
};

export default DetailReport;