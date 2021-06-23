const express = require('express')
const router = express.Router()

const { validateBodyMiddleware } = require('../middleware/validator')

router.post('/', validateBodyMiddleware('someschema'), (req, res, next) => {
  res.send({ status: 'success' })
})

module.exports = router
