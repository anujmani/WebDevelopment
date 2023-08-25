const express = require("express");
const { checkUser } = require("../../controllers/loginController");
const router = express.Router()

router.post("/login", checkUser);


module.exports = router;