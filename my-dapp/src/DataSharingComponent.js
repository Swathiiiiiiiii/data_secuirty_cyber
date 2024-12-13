
import React, { useState } from 'react';

const FileUploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Implement the upload logic (e.g., send file to blockchain or server)
      alert(`File ${file.name} uploaded successfully!`);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Upload Data for Secure Storage</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <br />
        <button type="submit">Upload File</button>
      </form>
    </div>
  );
}

export default FileUploadPage;
