const router = require("express").Router();
const booksRoutes = require("./books");
const googleRoutes = require("./google");
// const searchRoutes = require("./search");

router.use("/books", booksRoutes);
router.use("/google", googleRoutes);
// router.use("/search", searchRoutes);


module.exports = router;
