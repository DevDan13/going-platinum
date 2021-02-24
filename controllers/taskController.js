const db = require("../models");

module.exports = {
  findById: function (req, res) {
    db.Task.findById(req.params.id)
      .then((dbTask) => res.json(dbTask))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Task.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Task.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Task.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
