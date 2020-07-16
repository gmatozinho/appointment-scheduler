const { slots } = require("../utils");
const { professional } = require("../db");

const create = async (body) => {
  try {
    const professional_slots = slots.generate_slots(body.be_available);

    const professional_to_create = {
      name: body.name,
      slots: professional_slots,
    };

    const saved_professional = await professional.create(
      professional_to_create
    );

    return saved_professional;
  } catch (error) {
    throw error;
  }
};

const read = async () => {
  try {
    const professionals = await professional.read();

    return professionals;
  } catch (error) {
    throw error;
  }
};
const readById = async (id) => {
  try {
    const wanted_professional = await professional.readById(id);

    return wanted_professional;
  } catch (error) {
    throw error;
  }
};

const readByTimeInterval = async ({id,start,end}) => {
  try {
    const wanted_professional = await readById(id);
    const json = JSON.parse(JSON.stringify(wanted_professional))
    slots.filter_slots(json,start,end)

    return json;
  } catch (error) {
    throw error;
  }
};

const update = async (id, body) => {
  try {
    const professional_slots = slots.generate_slots(body.be_available);

    const professional_to_update = {
      name: body.name,
      slots: professional_slots,
    };

    const updated_professional = await professional.update(id,professional_to_update);

    return updated_professional;
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {

    const deleted_professional = await professional.remove(id);

    return deleted_professional;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  read,
  readById,
  readByTimeInterval,
  update,
  remove,
};
