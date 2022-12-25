const express = require("express");
const {
  getAllUsers,
  getRandomUser,
  saveUser,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/random", getRandomUser);
router.post("/save", saveUser);

module.exports = router;
