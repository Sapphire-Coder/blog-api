const express = require('express')
const router = express.Router()
const Post = require('../models/posts')

// Index
router.get('/', (req, res) => {
    Post.find({}, (err, foundPosts) => {
        res.json(foundPosts)
    })
})

// Delete
router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
        res.json(deletedPost)
    })
})

// Update
router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new:true }, (err, updatedPost) => {
        res.json(updatedPost)
    })
})

// Create
router.post('/', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        res.json(createdPost)
    })
})

// Show
router.get('/:id', (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        res.json(foundPost)
    })
})

module.exports = router