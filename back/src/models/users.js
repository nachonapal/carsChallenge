const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
  },
  date: {
    type: Date,
  },
});

UserSchema.createdAt = new Date();

const User = mongoose.model("users", UserSchema);

module.exports = User;
