const { Router } = require('express');

const router = new Router()
const indexController = require('../controllers/indexController');

// @route "/"
// @method GET
router.get("/", indexController.getIndex)

module.exports = router