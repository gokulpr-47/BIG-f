const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  firstname: {
    type:String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  sem: {
    type: Number,
    required: true
  },
  gradYear: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true
  },
  college: {
    type:String,
    required: true
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = model("user", userSchema);
