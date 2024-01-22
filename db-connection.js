const path = require('path');
const mongoose = require("mongoose");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
console.log('here...', path.resolve(__dirname, '../.env'), process.env.MONGO_URI)


const uri = process.env.MONGO_URI;

const db = mongoose.connect(uri, { useNewUrlParser: true });

module.exports = db;
