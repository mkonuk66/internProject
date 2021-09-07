const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((User) => res.json(User))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/newUser").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({
    username,
    password,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateUser/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      exercise.username = req.body.username;
      exercise.password = req.body.password;

      users
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Errory: " + err));
    })
    .catch((err) => res.status(400).json("Errorx: " + err));
});

module.exports = router;
