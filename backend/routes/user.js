const express = require('express');
const { register, login, me } = require('../controllers/user');
const { auth } = require('../utils/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, me);

module.exports = router;
