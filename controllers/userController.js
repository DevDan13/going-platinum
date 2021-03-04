const db = require("../models");

module.exports = {
  findById: function (req, res) {
    db.User.findOne({firebaseId: req.params.id})
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  createUser: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeUser: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAllUser: function (req, res) {
    db.User.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getTaskbyUserID: function (req, res) {
    db.Task.find({ user: req.params.id })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
};
