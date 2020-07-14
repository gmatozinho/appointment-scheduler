const mongoose = require("mongoose");
const { Schema } = mongoose;

const professional_slots_schema = new Schema({
  day_of_week: {
    type: String,
    require: true,
  },
  starts: {
    type: String,
    require: true,
  },
  ends: {
    type: String,
    require: true,
  },
  open: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model(
  "professional_slots",
  professional_slots_schema
);

/* const professional_slots = {
  id: "x",
  professionalId: "x",
  day: "seg",
  starts: "8:30",
  end: "9:00",
  open: true,
} */

