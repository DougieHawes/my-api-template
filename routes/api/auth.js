const router = require("express").Router();

const { authRoute } = require("../../controllers/auth");

router.get("/", authRoute);

module.exports = router;
