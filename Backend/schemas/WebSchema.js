const mongoose = require("mongoose");

const WebSchema = new mongoose.Schema({
    title: String,
    releaseDate: String,
    duration: String,
    rating: String,
    imdbRating: Number,
    metascore: Number,
    votes: String,
    genre: [String],
    director: [String],
    writers: [String],
    actors: [String],
    actresses: [String],
    story: String,
    imageUrl: String,
});


const Web = mongoose.model("Web", WebSchema);

module.exports = Web; //Moies