import React, { useEffect, useState } from 'react';
import API from '../api';

const Dashboard = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await API.get('/dashboard/stats/');
        setStats(response.data.stats);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        alert('Failed to load dashboard data.');
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            {stat.key}: {stat.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
