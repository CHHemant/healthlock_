const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  filename: String,
  fileUrl: String,
  encrypted: Boolean,
  sharedTokens: [{
    token: String,
    expiresAt: Date,
    role: String,
    accessedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  }]
}, { timestamps: true });

module.exports = mongoose.model('Record', RecordSchema);
