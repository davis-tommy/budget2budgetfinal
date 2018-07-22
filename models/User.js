const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isProvider: {
    type: Boolean,
    default: false
  }
});

module.exports = User = mongoose.model("users", UserSchema);