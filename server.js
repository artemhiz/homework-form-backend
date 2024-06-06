const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const router = require('./sending');
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_LINK)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.use(router);

const PORT = process.env.port || 4000;
app.listen(PORT, () => console.log(`Server works at port ${PORT}`));