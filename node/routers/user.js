const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getSingleUser);
userRouter.post("/add", addUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
