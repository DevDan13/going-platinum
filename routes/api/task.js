const router = require("express").Router();
const taskController = require("../../controllers/taskController");

router
  .route("/")
  .post(taskController.createTask)



  
router
  .route("/:id")
  .get(taskController.findAllUserTasks)
  .put(taskController.updateTask)
  .delete(taskController.removeTask)
  .post(taskController.createTask)
  .get(taskController.findTaskById);

module.exports = router;
