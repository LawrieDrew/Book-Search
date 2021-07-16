const router = require("express").Router();
const googleControllers = require("../../controllers/googleControllers");

router.route("/")
    .get(googleControllers.findAll);


module.exports = router;