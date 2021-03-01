const router = require("express").Router();
const userController = require("../../controllers/userController");
const taskController = require("../../controllers/taskController");
// router.route("/user").get(taskController.findById);

router
  .route("/task")
  .get(taskController.findAllTasks)
  .post(taskController.createTask);

router
  .route("/task/:id")
  .put(taskController.updateTask)
  .delete(taskController.removeTask)
  .get(taskController.findTaskById);

router.route("/").get(userController.findById).post(userController.createUser);

module.exports = router;
