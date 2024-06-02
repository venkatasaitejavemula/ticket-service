const express = require("express");
const {
  getAllUsers,
  updateUserById,
  deleteUser,
  createUsers,
} = require("../Controller/user.controller");

const userRouter = express.Router();

userRouter.get("/findAll", getAllUsers);
userRouter.post("/create-user", createUsers);
userRouter.put("/update-user/:id", updateUserById);
userRouter.delete("/delete-user", deleteUser);

module.exports = userRouter;
