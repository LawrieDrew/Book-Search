const router = require("express").Router();
const googleControllers = require("../../controllers/googleControllers")

router.route("/")
    .get(googleControllers.findAll)
    .post(googleControllers.create);

router.route("/:id")
    .delete(googleControllers.remove);


module.exports = router;