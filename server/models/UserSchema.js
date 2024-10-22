const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    lName: {
      required: true,
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    accNo: {
      type: Number,
      required: true,
    },
    accType: {
      required: true,
      type: String,
    },
    phoneNo: {
      required: true,
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      required: true,
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      required: true,
      type: String,
    },
    amount: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
