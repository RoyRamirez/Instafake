const mongoose = require('mongoose');
const pass = 'OOqqrcUIl5CfOT8O';
const db = 'instafake';
const uri = `mongodb+srv://superuser:${pass}@cluster0.pellt.mongodb.net/${db}?retryWrites=true&w=majority`;

module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});