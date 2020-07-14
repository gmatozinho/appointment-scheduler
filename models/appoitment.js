const mongoose = require("mongoose");
const { Schema } = mongoose;

const appoitment_schema = new Schema({
  customer_name: {
    type: String,
    require: true,
  },
  customer_email: {
    type: String,
    require: true,
  },
  customer_phone: {
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
});

module.exports = mongoose.model(
  "appoitment",
  appoitment_schema
);

/* const appoitment = {
  id: "x",
  name: "String",
  email: "String",
  phone: "Number",
  starts: "8:30",
  ends: "9:30",
}; */
