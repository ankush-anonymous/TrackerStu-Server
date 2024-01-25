const express = require("express");
const router = express.Router();

const recordDataController = require("../controller/recordDataController");

router.post("/createRecord", recordDataController.createEntry);

module.exports = router;
