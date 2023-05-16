const express = require('express');
const route = express.Router();
const movie = require('../movie_object/movie.object');
const mongoose = require('mongoose');


route.post('/movies', (req, res) => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/movies_db").then(() => {
            console.log("connected");
        });
        const movies =  new movie({
            movie_name : req.body.movie_name,
            description : req.body.description,
            rating : req.body.rating,
            image : req.body.image
        })

         movies.save() .then(result => {
            // console.log(result);
            res.status(201).json({
                message: 'movie has been created successfully',
                data: result
            });
        }).catch(err => {
            res.status(500).json({message: 'something went wrong', err});
            console.log(err);
        });

    } catch (error) {
        console.log(error);
    }
});


module.exports = route;