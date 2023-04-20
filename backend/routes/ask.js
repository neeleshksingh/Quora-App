const express = require('express')
const Ask = require('../models/ask')

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

//POST API FOR ADDING ASK

router.post('/', async (req, res) => {
    try {
        const { ask } = req.body
        if (!ask) {
            res.status(400).json({
                status: 'failed',
                message: 'add field'
            })
        }
        else {
            const data = await Ask.create({
                ask
            })
            return res.status(200).json({
                status: 'success',
                messgae: 'ask added',
                data
            })
        }
    } catch (e) {
        return res.status(500).json({
            error: e.message
        })
    }
})

//GET API TO GET ASKS

router.get('/', async (req, res) => {
    try {
        const data = await Ask.find()
        if (data) {
            return res.status(200).json({
                status: 'success',
                data
            })
        }
    } catch (e) {
        return res.status(500).json({
            error: e.message
        })
    }
})

module.exports = router