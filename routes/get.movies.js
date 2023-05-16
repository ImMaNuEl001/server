const mongoose = require('mongoose');
const route = require('express').Router();
const movie = require('../movie_object/movie.object');


route.get('/movies', async (req, res) => {
    mongoose.connect('mongodb://127.0.0.1:27017/movies_db');
    try {
        const movies = await movie.find({search: "movie"});
        res.json(movies);

    } catch (error) {
        
    }
});

module.exports  =  route;