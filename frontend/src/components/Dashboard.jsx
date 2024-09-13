import React, { useEffect, useState } from 'react';
import API from '../api'; // Ensure your API instance is correctly configured
import { Bar, Line } from 'react-chartjs-2'; // Example using chart.js
import 'chart.js/auto'; // Import chart.js dependencies

function Dashboard() {
  const [data, setStats] = useState(null); // State to hold data fetched from the backend
  const [loading, setLoading] = useState(true); // State to manage loading
  const [file, setFile] = useState(null); // State to hold the selected file

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await API.get('/dashboard/stats/'); 
        setStats(response.data.stats); // Ensure 'stat' is the right state for holding fetched stat
        setLoading(false)
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        setLoading(false); // Set loading to false even if there is an error
        alert('Failed to load dashboard data.');
      }
    };

    fetchStats();
  }, []);

  // Handle file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Update file state with the selected file
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await API.post('/api/ingestion/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Add the token for authenticated upload
        },
      });
      alert('File uploaded successfully!');
      setLoading
    } catch (error) {
      console.error('File upload failed:', error);
      alert('File upload failed.');
    }
  };
  
  
  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is fetched
  }

  // Mock Data for Charts (Replace with API data if available)
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Visitors',
        data: [50, 60, 70, 80, 90],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {/* File Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload File</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleFileUpload}
        >
          Upload
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">{data?.totalUsers || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Active Sessions</h2>
          <p className="text-3xl font-bold">{data?.activeSessions || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">New Orders</h2>
          <p className="text-3xl font-bold">{data?.newOrders || 0}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <Bar data={barData} />
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Visitor Trends</h2>
          <Line data={lineData} />
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-2 px-4 border-b">{transaction.id}</td>
                <td className="py-2 px-4 border-b">{transaction.name}</td>
                <td className="py-2 px-4 border-b">${transaction.amount}</td>
                <td className="py-2 px-4 border-b">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
