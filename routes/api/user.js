const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/task")
  .get(userController.findById)
  .post(userController.createUser)
  .put(userController.updateUser)
  .delete(userController.removeUser)
module.exports = router;