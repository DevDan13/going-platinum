const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// router.route("/user").get(taskController.findById);

router
  .route("/task")
  .get(taskController.findAllTasks)
  .post(taskController.createTask);

router
  .route("/task/:id")
  .put(taskController.updateTask)
  .delete(taskController.removeTask);

module.exports = router;
