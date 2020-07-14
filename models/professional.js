const mongoose = require("mongoose");
const { Schema } = mongoose;

const professional_schema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("professional", professional_schema);
