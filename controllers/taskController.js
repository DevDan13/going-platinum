const db = require("../models");

module.exports = {
  createTask: function (req, res) {
    db.Task.create(req.body)
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
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
      user: req.params.id,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findTaskById: function (req, res) {
    db.Task.findById(req.params.id)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  getTasks: function (req, res) {
    db.Task.find()
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
