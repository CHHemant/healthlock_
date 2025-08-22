const express = require('express');
const { auth, rbac } = require('../utils/auth');
const {
  uploadRecord, getRecords, generateQR, accessRecord, auditLogs
} = require('../controllers/record');

const router = express.Router();

router.post('/upload', auth, uploadRecord);
router.get('/', auth, getRecords);
router.post('/generateQR/:id', auth, generateQR);
router.post('/access', accessRecord); // via QR/token, no login required
router.get('/audit', auth, auditLogs);

module.exports = router;
