const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  //find all users
  .get(userController.findAllUser)
  //create new user
  .post(userController.createUser);

router.route("/:id").get(userController.findById);

router.route("/tasks/:id").get(userController.getTaskbyUserID);

module.exports = router;
