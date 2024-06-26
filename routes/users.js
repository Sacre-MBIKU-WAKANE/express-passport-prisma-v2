const express = require("express");
const { getUsers, registerUser } = require("../controllers/users");
const router = express.Router();

router.get("/", getUsers).post("/", registerUser);

module.exports = router;
