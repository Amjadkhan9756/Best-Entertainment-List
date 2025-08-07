const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
    id: String,
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

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;