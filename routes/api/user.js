const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
.get(userController.findById)
.post(userController.createUser);

module.exports = router;
