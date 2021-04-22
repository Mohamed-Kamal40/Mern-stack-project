const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Age: { type: Number, required: true },
  Phone: { type: String, required: true },
  Grade: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
