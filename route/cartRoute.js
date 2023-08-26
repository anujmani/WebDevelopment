const express = require("express");
const { addCart, getCart } = require("../controllers/cartController");
const router = express.Router();

router.post("/", addCart);

router.get("/", getCart);

module.exports = router;
