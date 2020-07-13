const professional_input = {
  day:{
    starts: 8,
    ends: 10,
  }
}

const professional = {
  id: "x",
  professionalName: "x",
};

const professional_slot = {
  id: "x",
  professionalId: "x",
  day: "seg",
  starts: "8:30",
  end: "9:00",
  open: true,
}

const customer_session = {
  id: "x",
  name: "String",
  email: "String",
  phone: "Number",
  starts: "8:30",
  ends: "9:30"
};

//checar disponibilidade, ao escolher horario checa se é possivel e se for fecha o slote fecha o proximo


const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  weight: {
    type: Number,
    require: true
  },
  age: {
    type: Number,
    default: Date.now
  }

});

module.exports = mongoose.model('animal', scheduleSchema);
