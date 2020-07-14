const { professional_slots } = require("../db");

const create = (body) => {
  const newProfessionalSlot = new professional_slots({
    day_of_week: body.day_of_week,
    starts: body.starts,
    ends: body.ends,
    open: true,
  });

  newProfessionalSlot
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const read = () => {
  professional_slots
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.status(500).json(error));
};

const update = (id, body) => {
  professional_slots
    .findOneAndUpdate({ _id: id }, body, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.status(500).json(error));
};

const remove = () => {};
