import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("/api/record", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then((res) => setRecords(res.data.records));
  }, []);

  return (
    <div>
      <h2>Your Records</h2>
      <a href="/upload">Upload New Record</a>
      <ul>
        {records.map((rec) => (
          <li key={rec._id}>
            {rec.filename} - <a href={rec.fileUrl} target="_blank" rel="noreferrer">View</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
