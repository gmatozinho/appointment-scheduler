var express = require("express");
var router = express.Router();
const { professional_controller } = require("../controllers");
const to = require("await-to-js").default;

router.get("/", async function (req, res, next) {
  const [error, response] = await to(professional_controller.read());
  if (error) res.status(400).json({ message: error.message });
  else res.status(200).json(response);
});

router.get("/:id", async function (req, res, next) {
  const [error, response] = await to(
    professional_controller.readById(req.params.id)
  );
  if (error) res.status(400).json({ message: error.message });
  else res.status(200).json(response);
});
router.get("/:id/:start.:end", async function (req, res, next) {
  const [error, response] = await to(
    professional_controller.readByTimeInterval({...req.params})
  );
  if (error) res.status(400).json({ message: error.message });
  else res.status(200).json(response);
});

router.post("/", async function (req, res, next) {
  const [error, response] = await to(professional_controller.create(req.body));
  if (error) res.status(400).json({ message: error.message });
  else res.status(201).json(response);
});

router.put("/:id", async function (req, res, next) {
  const [error, response] = await to(
    professional_controller.update(req.params.id, req.body)
  );
  if (error) res.status(400).json({ message: error.message });
  else res.status(200).json(response);
});

router.delete("/:id", async function (req, res, next) {
  const [error, response] = await to(
    professional_controller.remove(req.params.id)
  );
  if (error) res.status(400).json({ message: error.message });
  else res.status(200).json(response);
});

module.exports = router;
