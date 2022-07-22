const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        default: "Not specified"
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: "No rating"
    },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;