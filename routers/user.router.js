const express = require("express");
const {
  getAllUsers,
  getRandomUser,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/random", getRandomUser);

module.exports = router;
