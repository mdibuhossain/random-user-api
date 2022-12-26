const express = require("express");
const {
  saveUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getRandomUser,
  updateManyUser,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/random", getRandomUser);
router.post("/save", saveUser);
router.patch("/update", updateUser);
router.patch("/bulk-update", updateManyUser);
router.delete("/delete", deleteUser);

module.exports = router;
