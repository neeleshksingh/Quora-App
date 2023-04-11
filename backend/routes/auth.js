const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')
const { jwt_token } = require('../key')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))


//POST API FOR REGISTERATION
router.post('/reg', async (req, res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body
        if (!email && !password) {
            return res.status(400).json({
                status: "failed",
                message: "fill all the details"
            })
        }
        else {
            const exist = await User.findOne({ email: email })
            if (exist) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'user already registered'
                })
            }
            bcrypt.hash(password, 10, async (err, hasshedPass) => {
                if (err) {
                    return res.status(400).json({
                        error: err.message
                    })
                }
                const data = await User.create({
                    email, password: hasshedPass
                })
                return res.status(200).json({
                    status: 'success',
                    message: 'user created successfully',
                    data
                })
            })
        }
    } catch (e) {
        return res.status(400).json({
            error: e.message
        })
    }
})

//POST API FOR LOGIN
router.post('/log', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email && !password) {
            return res.status(400).json({
                status: "failed",
                message: "fill all the details"
            })
        }
        else {
            const exist = await User.findOne({ email })
            if (exist) {
                bcrypt.compare(password, exist.password, function (err, result) {
                    if (err) {
                        return res.status(400).json({
                            error: err.message
                        })
                    }
                    if (result) {
                        const { _id, email, password } = exist
                        return res.status(200).json({
                            status: 'success',
                            message: 'User loggedin Successfully',
                            user: { _id, email, password }
                        })
                    }
                    else {
                        return res.status(400).json({
                            message: "password not matched"
                        })
                    }
                })
            }
            else {
                return res.status(400).json({
                    status: 'failed',
                    message: 'user not found'
                })
            }
        }
    } catch (e) {
        return res.status(400).json({
            error: e.message
        })
    }
})

//DELETE API FOR DELETING USER
router.delete('/:id', async(req,res)=>{
    try{
        const data = await User.deleteOne({_id:req.params.id})
        if(data){
            return res.status(200).json({
                status : 'success',
                message : 'User deleted successfully'
            })
        }
    } catch(e){
        return res.status(400).json({
            error: e.message
        })
    }
})

//GET API FOR USERS
router.get('/', async(req,res)=>{
    console.log(req.body);
    try{
        const data = await User.find()
        return res.status(200).json({
            status : 'success',
            data
        })
    } catch(e){
        return res.status(400).json({
            error: e.message
        })
    }
})

module.exports = router