const mongoose = require('mongoose');

const movie = new mongoose.Schema({
    search: {
        type: String,
        default: "movie"
    },
    movie_name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    rating :  {
        type: Number,
        required: true
    },
    image :  {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Movie", movie);