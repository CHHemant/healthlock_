import React, { useState } from "react";
import axios from "axios";

export default function AccessPage() {
  const [token, setToken] = useState("");
  const [record, setRecord] = useState();

  const access = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/record/access", { token });
    setRecord(res.data.record);
  };

  return (
    <div>
      <form onSubmit={access}>
        <h2>Access Shared Record</h2>
        <input value={token} onChange={e => setToken(e.target.value)} placeholder="Paste QR token" required />
        <button type="submit">Access</button>
      </form>
      {record && (
        <div>
          <h3>Record: {record.filename}</h3>
          <a href={record.fileUrl} target="_blank" rel="noreferrer">Download/View</a>
          <p>Access Level: {record.role}</p>
        </div>
      )}
    </div>
  );
}
