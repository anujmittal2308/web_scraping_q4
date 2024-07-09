const express = require("express");
const router = express.Router();
const flipkart_mobile = require("../controller/flipkart_mobile");
const snapdeal_tshirt = require("../controller/snapdeal_t-shirt");

router.get("/flipkart/mobile", flipkart_mobile);
router.get("/snapdeal/t-shirt", snapdeal_tshirt);

module.exports = router;
