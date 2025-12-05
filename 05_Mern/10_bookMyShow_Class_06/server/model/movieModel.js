const mongoose = require('mongoose');

/**
        {
            "title": "Inside Out 2",
            "description": "Crazines inside your brain goes to the next level",
            "duration": 120,
            "genre": "Animation",
            "language": "English",
            "releaseDate": "2024-06-01",
            "poster": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/de-de-pyaar-de-2-et00391156-1764331016.jpg",
        }
 */
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
});


const Movies = mongoose.model("movies", movieSchema);
module.exports = Movies;