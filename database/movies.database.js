const mongoose = require('mongoose');

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/movies_db").on("open", ()=> {
    console.log("db created successfully");
});

module.exports = connection;