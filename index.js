const express = require('express');
const app = express();
const connection = require('./database/movies.database');
const route = require('./routes/movies.route');
const getMovies = require('./routes/get.movies');
const cors =  require('cors');


const port = 3000;

app.use(cors());

app.use(express.json());

// this works
app.get('/api', (req, res) => {
    res.send("Hello hope this works!: ");
});

app.use('/api', route);
app.use('/api', getMovies);


// perfect!!
app.listen(port || process.env.PORT, ()=>{
    console.log("listening on port http://localhost:"+port)
});
