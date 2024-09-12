import React, { useState } from 'react';
import API from '../../api';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      await API.post('/api/ingestion/upload/', formData);
      alert('File uploaded successfully');
    } catch (error) {
      console.error(error);
      alert('File upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} required />
      <button type="submit">Upload File</button>
    </form>
  );
};

export default FileUpload;
