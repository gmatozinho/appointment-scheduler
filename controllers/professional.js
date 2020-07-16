const { slots } = require("../utils");
const { professional} = require("../db")

const create = async (body) => {
  try {
    const professional_slots = slots.generate_slots(body.be_available);

    const professional_to_save = {
      name: body.name,
      slots: professional_slots,
    };

    const saved_professional = await professional.create(professional_to_save)

    return saved_professional;
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
