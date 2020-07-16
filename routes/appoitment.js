var express = require("express");
var router = express.Router();
const { appoitment_controller } = require("../controllers");
const to = require("await-to-js").default;


router.get("/", function (req, res, next) {
  res.send("get appoitment");
});

router.post("/", async function (req, res, next) {
  const [error, response] = await to(appoitment_controller.create(req.body));
  if (error) res.status(400).json({ message: error.message });
  else res.status(201).json(response);
});

router.put("/", function (req, res, next) {
  res.send("put appoitment");
});

module.exports = router;
