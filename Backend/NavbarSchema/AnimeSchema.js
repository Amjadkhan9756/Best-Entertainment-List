const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
        id: { type: String }, // optional, since MongoDB already has _id
        title: { type: String, required: true },
        releaseDate: { type: String },
        duration: { type: String },
        rating: { type: String },
        imdbRating: { type: Number },
        metascore: { type: Number, default: null }, // ✅ allows null
        votes: { type: String },
        genre: { type: [String], default: [] },
        director: { type: [String], default: [] },
        writers: { type: [String], default: [] },
        actors: { type: [String], default: [] },
        actresses: { type: [String], default: [] },
        story: { type: String },
        imageUrl: { type: String, default: "" },
    }, { timestamps: true } // ✅ adds createdAt and updatedAt
);

// ✅ Prevent OverwriteModelError
const Anime = mongoose.models.Anime || mongoose.model("Anime", AnimeSchema);

module.exports = Anime;