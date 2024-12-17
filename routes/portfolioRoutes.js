const express = require("express");
const { sendEmailController } = require("../controller/portfolioController");

//Router Object
const router = express.Router();

// Routes
router.post("/sendEmail", sendEmailController);

//Export
module.exports = router;
