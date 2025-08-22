# HealthLock – Secure Patient Record Sharing

## 🚀 Overview

**HealthLock** is a secure web application for storing and sharing patient health records. It uses temporary QR codes/tokens for sharing, end-to-end encryption, detailed audit logs, and role-based access for doctors, pharmacists, and diagnostic staff. This system empowers patients with complete control over their health data while simplifying secure, compliant sharing within the healthcare ecosystem.

---

## 🩺 Key Features

- **Patient Record Upload:** Patients can upload digital health records (PDFs, images).
- **Temporary Secure Sharing:** Share records via QR code/token, valid for a limited time.
- **End-to-End Encryption:** All records are securely stored and transmitted.
- **Role-Based Access (RBAC):** Patients decide who gets access and what level (doctor: full, pharmacist: partial, diagnostics: read-only).
- **Audit Logs:** Every access is logged with timestamp and user info.
- **Notifications:** Patients are alerted when their records are accessed.
- **Modern Tech Stack:** Built with Node.js, Express, MongoDB, React.js, JWT, and QR code technology.

---

## 🌟 Why HealthLock?

- **Patient Privacy First:** You control your data and who accesses it.
- **Secure & Compliant:** Designed for high privacy and security standards (HIPAA/GDPR principles in mind).
- **Easy Sharing:** QR code/token-based sharing means no more insecure emails or USB drives.
- **Transparency:** Full audit logs keep you informed of every record access.
- **Flexible Roles:** Fine-grained, role-based permissions for different healthcare providers.
- **Interoperability Ready:** FHIR API foundation for future health system integrations.

---

## ⚡ Benefits

- **For Patients:** Control, privacy, and peace of mind with full visibility of who sees your health data.
- **For Doctors/Providers:** Fast, secure access to authorized records—no more paperwork or waiting.
- **For Healthcare Systems:** Reduces risk, increases compliance, and streamlines medical record workflows.

---

## 🖥️ Demo Workflow

1. **Patient uploads** a medical document.
2. **App generates** a QR code/token for sharing.
3. **Doctor scans** the QR code or enters the token.
4. **Doctor views** the authorized record.
5. **Patient gets notified** and all access is logged.

---

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v16+ recommended)
- **MongoDB** (local or Atlas cloud)
- **npm** (Node package manager)

### 1. Clone the Repo

```bash
git clone https://github.com/CHHemant/healthlock_.git
cd healthlock
```

### 2. Backend Setup

```bash
cd backend
npm install
mkdir uploads
# Create a .env file with:
# MONGO_URI=mongodb://localhost:27017/healthlock
# JWT_SECRET=yourSecret
node app.js
```

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

The frontend runs at [http://localhost:3000](http://localhost:3000) and backend at [http://localhost:5000](http://localhost:5000).

---

## 📲 Usage Guide

- **Register/Login:** As patient, doctor, pharmacist, or diagnostic.
- **Patients:** Upload records, generate QR codes/tokens for sharing.
- **Doctors/Providers:** Access shared records using QR code/token.
- **Audit:** View logs of who accessed your records.

---

## 🧩 Project Structure

```
healthlock/
  backend/
    models/
    routes/
    controllers/
    utils/
    app.js
  frontend/
    src/
      components/
      pages/
      App.js
    package.json
  README.md
```

---

## 🧑‍💻 Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Security:** JWT, bcrypt, QR code, (demo) encryption
- **APIs:** FHIR API-ready

---

## ⚠️ Disclaimer

> This project is a demonstration and **should not** be used in production for real medical data without implementing full, standards-compliant encryption, authentication, and compliance checks (HIPAA, GDPR, etc.).

---

## 🤝 Contributing

PRs welcome! Please open an issue or discussion for features, bugs, or enhancements.

---

## 📄 License

MIT License

---

**HealthLock** – Empowering patients, simplifying secure health record sharing.
