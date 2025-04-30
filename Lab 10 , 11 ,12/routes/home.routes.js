const express = require('express');
const router = express.Router();
const controller = require("../controllers/home.controller.js");
const isAuth = require("../utils/is-auth.js");

router.get('/login', controller.render_login);
router.get('/dash', controller.render_dash);

module.exports = router;