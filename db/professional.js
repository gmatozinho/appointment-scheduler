const { professional } = require("../models");

const create = async (body) => {
  try {
    const newProfessional = new professional({ ...body });

    const result = await newProfessional.save();

    return result;
  } catch (error) {
    throw error;
  }
};

const read = async () => {
  try {
    const result = await professional.find();

    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, body) => {
  try {
    const result = await professional.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const remove = () => {};

module.exports = {
  create,
  read,
  update,
  remove,
};
