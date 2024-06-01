
const express = require("express");
const router = express.Router();
const endPointRoutes = require("./endPoints.added routes and controller");

router.use('number',endPointRoutes);

module.exports = router;