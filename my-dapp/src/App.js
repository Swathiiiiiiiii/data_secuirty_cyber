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

  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f4f4f9',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  };

  const inputStyle = {
    margin: '20px 0',
    padding: '10px',
    backgroundColor: '#fff',
    border: '2px solid #ddd',
    borderRadius: '5px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Upload Data for Secure Storage</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} style={inputStyle} />
        <br />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Upload File
        </button>
      </form>
    </div>
  );
}

export default FileUploadPage;
