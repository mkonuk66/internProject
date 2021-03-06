const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((User) => res.json(User))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/newUser").post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({
    name,
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
      users.name = req.body.name;
      users.username = req.body.username;
      users.password = req.body.password;

      users
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
