const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  //find all users
  .get(userController.findAllUser)
  //create new user
  .post(userController.createUser);

<<<<<<< HEAD
router.route("/:id").get(userController.findById);

=======
>>>>>>> ae1eae2e6d6483fe8f56c178a6e4934edc0e0680
router.route("/tasks/:id").get(userController.getTaskbyUserID);

module.exports = router;
