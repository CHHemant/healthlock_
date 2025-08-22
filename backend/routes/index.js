const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const recordRoutes = require('./record');

router.use('/user', userRoutes);
router.use('/record', recordRoutes);

module.exports = router;
