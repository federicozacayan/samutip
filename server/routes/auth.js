const { Router } = require("express")
const router = Router()

const {
    getUser,
} = require('../controllers/index')

router.get('/user', getUser)

module.exports = router