import React, { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState();

  const upload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    await axios.post("/api/record/upload", data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    window.location = "/dashboard";
  };

  return (
    <form onSubmit={upload}>
      <h2>Upload Record</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} required />
      <button type="submit">Upload</button>
    </form>
  );
}
