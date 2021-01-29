const express = require("express")
const songRouter = express.Router()
const Song = require("../models/song.js")

// get all songs
songRouter.get("/", (req, res, next) => {
    Song.find((err, songs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status9(200).send(songs)
    })
})
// post new song
songRouter.post("/", (req, res, next) => {
    const newSong = new Song(req.body)
    newSong.save((err, savedSong) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedSong)
    })
})

module.exports = songRouter