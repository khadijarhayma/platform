const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },
  isdoctor: {
    type: Boolean,
    default: false,
  },
  isadmin: {
    type: Boolean,
    default: false,
  },
  prix: Number,
  category: {
    type: String,
  },
  adress: {
    type: String,
  },
  timework: {
    type: String,
  },
  isdomicile: {
    type: Boolean,
    default: false,
  },
  rate: {
    type: Number,
    default: 0,
  },
});

module.exports = user = mongoose.model("user", userSchema);
