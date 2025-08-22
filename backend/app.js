const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/healthlock', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api', routes);

app.listen(5000, () => console.log('Server running on port 5000'));
