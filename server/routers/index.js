const express = require('express');
const user = require('./user');
const biodata = require('./biodata');
const router = express.Router();

router.use(user)
router.use(biodata)

module.exports = router
