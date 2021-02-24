const router = require("express").Router();
const userController = require("../../controllers/taskController");

// router.route("/user").get(taskController.findById);

router
  .route("/task")
  .get(userController.findAllTasks)
  .post(userController.createTask);

router
  .route("/task/:id")
  .put(userController.updateTask)
  .delete(userController.removeTask);

router.route("/").get(userController.findById).post(userController.createUser);

module.exports = router;
