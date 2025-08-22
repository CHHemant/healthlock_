const Record = require('../models/Record');
const AuditLog = require('../models/AuditLog');
const { generateToken, generateQRImage } = require('../utils/qr');
const fs = require('fs');
const path = require('path');

exports.uploadRecord = async (req, res) => {
  try {
    const file = req.files.file;
    const filename = Date.now() + '_' + file.name;
    const uploadPath = path.join(__dirname, '../../uploads', filename);
    await file.mv(uploadPath);

    // Encrypt file (mock logic, real encryption recommended)
    const encrypted = true;
    const fileUrl = `/uploads/${filename}`;

    const record = await Record.create({
      owner: req.user.id,
      filename: file.name,
      fileUrl,
      encrypted,
      sharedTokens: []
    });

    await AuditLog.create({ user: req.user.id, action: 'upload', record: record._id });

    res.json({ success: true, record });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRecords = async (req, res) => {
  const records = await Record.find({ owner: req.user.id });
  res.json({ records });
};

exports.generateQR = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 min expiry
  const token = generateToken(id, role, expiresAt);
  const qr = await generateQRImage(token);

  await Record.findByIdAndUpdate(id, {
    $push: { sharedTokens: { token, expiresAt, role } }
  });

  res.json({ token, qr });
};

exports.accessRecord = async (req, res) => {
  try {
    const { token, userId } = req.body;
    // Parse token (mock logic)
    const [recordId, role, expiresAt] = Buffer.from(token, 'base64').toString().split('|');
    if (new Date(expiresAt) < new Date()) throw new Error('Token expired');
    const record = await Record.findById(recordId);
    if (!record) throw new Error('Record not found');

    // RBAC logic
    const allowed = ['doctor', 'pharmacist', 'diagnostic'].includes(role);
    if (!allowed) throw new Error('Role not allowed');

    // Audit log
    await AuditLog.create({ user: userId || null, action: `access:${role}`, record: recordId });

    res.json({ record: { filename: record.filename, fileUrl: record.fileUrl, role } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.auditLogs = async (req, res) => {
  const logs = await AuditLog.find({ user: req.user.id }).populate('record');
  res.json({ logs });
};
