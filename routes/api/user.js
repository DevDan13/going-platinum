const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
//find all users
.get(userController.findAllUser)
//create new user
.post(userController.createUser);
<<<<<<< HEAD
=======

router.route("/:id")
.get(userController.populateTask);
>>>>>>> c161b6417360e17f0b269c713c309bcb4abb2016

module.exports = router;
