const QRCode = require('qrcode');

exports.generateToken = (recordId, role, expiresAt) => {
  // Simple base64 token: recordId|role|expiresAt
  return Buffer.from([recordId, role, expiresAt.toISOString()].join('|')).toString('base64');
};

exports.generateQRImage = async (token) => {
  return await QRCode.toDataURL(token);
};
