const router = require("express").Router();
const userController = require("../../controllers/userController");

<<<<<<< HEAD
// router.route("/user").get(taskController.findById);

router
  .route("/task")
  .get(userController.findAllTasks)
  .post(userController.createTask);

router
  .route("/task/:id")
  .put(userController.updateTask)
  .delete(userController.removeTask)
  .get(userController.findTaskById);

router
  .route("/").get(userController.findById)
  .post(userController.createUser);
=======
router.route("/")
.get(userController.findById)
.post(userController.createUser);
>>>>>>> 76ad57460508666a870d548e65901abcb8928a2a

module.exports = router;
