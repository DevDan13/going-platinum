const router = require("express").Router();
const taskController = require("../../controllers/taskController");

router
  .route("/task")
  .get(taskController.findAllTasks)
  .post(taskController.createTask);

router
  .route("/task/:id")
  .put(taskController.updateTask)
  .delete(taskController.removeTask)
  .get(taskController.findTaskById);

module.exports = router;
