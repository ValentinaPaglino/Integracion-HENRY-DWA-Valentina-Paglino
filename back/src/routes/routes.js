const express = require('express')
const router = express.Router()
const getCharacterById = require('../controllers/characterController.js')
const checkLogin = require('../controllers/loginController.js')
const postUser = require('../controllers/postUsers.js')
const postFav = require('../controllers/postFav.js')
const deleteFav = require('../controllers/deleteFav.js')


router.get("/character/:id", getCharacterById)

router.get("/", checkLogin)
router.post("/", postUser)
router.post("/favs", postFav)
router.delete("/favs/:id", deleteFav)

module.exports = router;