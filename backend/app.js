const express = require('express')
const connection = require('./connection/connection')
connection()
const User = require('./routes/auth')
const Post = require('./routes/addpost')
const cors = require('cors')

const app = express()

app.use(cors())
app.use('/auth', User)
app.use('/post', Post)

app.get('*', (req, res) => {
    res.status(500).send('Api not found')
})

app.listen(3000 || process.env.PORT, () => console.log('listening on port http://localhost:3000'))