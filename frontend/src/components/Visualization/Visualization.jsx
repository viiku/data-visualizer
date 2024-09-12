import React, { useState, useEffect } from 'react';
import API from '../../api';

const Visualization = () => {
  const [visualizations, setVisualizations] = useState([]);

  useEffect(() => {
    const fetchVisualizations = async () => {
      try {
        const response = await API.get('/api/visualization/generate/');
        setVisualizations(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching visualizations');
      }
    };
    fetchVisualizations();
  }, []);

  return (
    <div>
      <h2>Visualizations</h2>
      <ul>
        {visualizations.map((viz) => (
          <li key={viz.id}>{viz.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Visualization;
