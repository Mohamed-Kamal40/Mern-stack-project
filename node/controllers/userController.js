const User = require("../models/user");

const getAllUsers = async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  User.find()
    .sort({ name: -1 })
    .then((users) => {
      res.status(200).send(users);
    });
};
const getSingleUser = async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  User.findById({ _id: req.params.id }).then((user) => {
    res.status(200).send(user);
  });
};
const addUser = async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let user = new User({
    Name: req.body.name,
    Age: req.body.age,
    Phone: req.body.phone,
    Grade: req.body.grade,
  });
  user.save().then((data) => {
    res.send(data);
  });
};
const updateUser = async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (user) => {
      res.status(200).send("User Updated");
    }
  );
};
const deleteUser = async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  User.findByIdAndDelete({ _id: req.params.id }).then(() => {
    res.send("User Deleted");
  });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
};
