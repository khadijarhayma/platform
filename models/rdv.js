const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rdvSchema = new Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  patient: {
    type: mongoose.Schema.Types.Mixed,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  status: {
    type: String,
  },
});
module.exports = rdv = mongoose.model("rdv", rdvSchema);
