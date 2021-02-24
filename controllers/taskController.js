const db = require("../models");

module.exports = {
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  createTask: function (req, res) {
    db.Task.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
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
  findAllTasks: function (req, res) {
    db.Task.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};