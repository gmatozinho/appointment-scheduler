const {appoitment} = require("../db");

const create = (body) => {
  const newAppoitment = new appoitment({
    name: body.name,
  });

  newAppoitment
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const read = () => {};

const update = () => {};

const remove = () => {};
