const express = require('express')
const router = express.Router()

router.use('/worker/chats', require('./worker/chats'))

module.exports = router