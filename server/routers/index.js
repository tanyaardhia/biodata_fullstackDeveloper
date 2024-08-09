const express = require('express');
const user = require('./user');
const biodata = require('./biodata');
const authentication = require('../middlewares/authentication');
const admin = require('./admin');
const router = express.Router();

router.use(user)

router.use(authentication)
router.use(biodata)
router.use(admin)

module.exports = router
