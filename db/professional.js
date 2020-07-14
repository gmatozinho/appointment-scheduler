const { professional } = require("../db");

const create = (body) => {
  const newProfessional = new professional({
    name: body.name,
  });

  newProfessional
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
