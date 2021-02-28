const db = require("../models");

module.exports = {
<<<<<<< HEAD
  // findById: function (req, res) {
  //   db.User.findById(req.params.id)
  //     .then((dbUser) => res.json(dbUser))
  //     .catch((err) => res.status(422).json(err));
  // },
=======
  // createTask: function (req, res) {
  //   db.Task.create(req.body)
  //     .then((dbUser) => {
  //       res.json(dbUser);
  //     })
  //     .catch((err) => res.status(422).json(err));
>>>>>>> c161b6417360e17f0b269c713c309bcb4abb2016
  createTask: function (req, res) {
    db.Task.create(req.body)
  .then(dbUser => {
    res.json(dbUser);
  })
  .catch(err => {
    res.json(err);
  });
},
  updateTask: function (req, res) {
    db.Task.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeTask: function (req, res) {
    db.Task.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAllUserTasks: function (req, res) {
    db.Task.find({
      userId: req.params.id
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },  
  findTaskById: function (req, res) {
    db.Task.findById(req.params.id)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
};
