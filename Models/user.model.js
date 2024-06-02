const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true],
  },
  userEmail: {
    type: String,
    required: [true],
    unique: true,
  },
  userAvatar: {
    type: String,
    required: [true],
  },
});

const UserModel = mongoose.model("Users", UsersSchema);

module.exports = UserModel;
