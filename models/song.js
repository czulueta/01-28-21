const mongoose = require("mongoose")
const Schema = mongoose.Schema

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model("Song", songSchema)