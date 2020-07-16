const { appoitment } = require("../models");

const create = async (body) => {
  try {
    const newAppoitment = new appoitment({ ...body });

    const result = await newAppoitment.save();

    return result;
  } catch (error) {
    throw error;
  }
};

const read = () => {};

const update = () => {};

const remove = () => {};

module.exports = {
  create,
  read,
  update,
  remove,
};
