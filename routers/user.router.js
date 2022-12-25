const express = require("express");
const {
  getAllUsers,
  getRandomUser,
  saveUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/random", getRandomUser);
router.post("/save", saveUser);
router.patch("/update", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;
