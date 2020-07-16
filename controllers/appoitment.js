const { appoitment, professional } = require("../db");

const create = async (body) => {
  try {
    const slots = [body.slot_starts, body.slot_ends];
    const wanted_professional = await professional.readById(
      body.professionalId
    );
    const json = JSON.parse(JSON.stringify(wanted_professional));
    json.slots.forEach((slot) => {
      if (slots.includes(slot._id)) {
        slot.open = false;
      }
    });

    const updatedProfessional = await professional.update(
      body.professionalId,
      json
    );

    const created_appoitment = await appoitment.create(body);

    return created_appoitment;
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
