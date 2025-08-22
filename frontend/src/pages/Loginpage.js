import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister
      ? "/api/user/register"
      : "/api/user/login";
    const body = isRegister
      ? { username, password, role }
      : { username, password };
    const res = await axios.post(url, body);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      window.location = "/dashboard";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      {isRegister && (
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="pharmacist">Pharmacist</option>
          <option value="diagnostic">Diagnostic</option>
        </select>
      )}
      <button type="submit">{isRegister ? "Register" : "Login"}</button>
      <p onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer" }}>
        {isRegister ? "Have an account? Login" : "New user? Register"}
      </p>
    </form>
  );
}
