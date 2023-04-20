const express = require('express')
const Post = require('../models/post')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.post('/', async (req, res) => {
    try {
        const { content, img, user } = req.body
        if (!content || !img) {
            res.status(400).json({
                status: 'failed',
                message: "Enter all fields"
            })
        }
        else {
            const data = await Post.create({
                content, img, user
            })
            return res.status(200).json({
                status: 'Success',
                data
            })
        }
    } catch (e) {
        return res.status(400).json({
            error: e.message
        })
    }
})

router.get('/allpost', async (req, res) => {
    try {
        const data = await Post.find()
        if (data) {
            return res.status(200).json({
                status: 'success',
                data
            })
        }
    } catch (e) {
        return res.status(400).json({
            error: e.message
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        if (post) {
            const data = await Post.updateOne({ _id: req.params.id }, { ...req.body })
            if (data) {
                return res.status(200).json({
                    status: 'success',
                    message: 'data updated succesfully',
                    data
                })
            }
            else {
                return res.status(400).json({
                    status: 'failed'
                })
            }
        }
        else {
            return res.status(400).json({
                status: 'failed',
                message: 'no post find with that id'
            })
        }
    } catch (e) {
        return res.status(400).json({
            error: e.message
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const data = await Post.findOne({ _id: req.params.id })
        if (data) {
            return res.status(200).json({
                data
            })
        }
        else {
            return res.status(400).json({
                status: 'failed',
                message: 'no id found'
            })
        }
    } catch (e) {
        return res.status(400).json({
            error: e.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Post.deleteOne({ _id: req.params.id })
        if (data) {
            return res.status(200).json({
                status: 'success',
                message: 'Post deleted successfully'
            })
        }
    } catch (e) {
        return res.status(400).json({
            error: e.message
        })
    }
})

module.exports = router