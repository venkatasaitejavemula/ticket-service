const UserModel = require("../Models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUsers = async (req, res) => {
  try {
    const users = await UserModel.create(req.body);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { isDeleteAll } = req.body;
    if (isDeleteAll) {
      await UserModel.deleteMany({});
      res.status(200).send({ message: "All records deleted successfully" });
    } else {
      const { id } = req.params;
      let user = await UserModel.findById(id);
      if (!user) {
        res.status(400).json({ message: "User is not available" });
      } else {
        await UserModel.findByIdAndDelete(id, req.body);
        res.status(200).json({ message: "User is deleted successfully" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body);
    if (!user) {
      res.status(400).json({ message: "User not Found" });
    } else {
      let updatedUser = await UserModel.findById(id);
      res.status(200).json(updatedUser);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  deleteUser,
  updateUserById,
};
