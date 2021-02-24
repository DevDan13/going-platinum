const router = require("express").Router();
const taskController = require("../../controllers/taskController");

router
  .route("/task")
  .get(taskController.findById)
  .post(taskController.createTask)
  .put(taskController.updateTask)
  .delete(taskController.removeTask)
module.exports = router;
