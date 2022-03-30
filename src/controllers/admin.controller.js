const express = require("express");
const router = express.Router();

const Admin = require("../Models/admin.model");

router.post("", async (req, res) => {
  try {
    const admins = await Admin.create(req.body);
    return res.status(201).send(admins);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
