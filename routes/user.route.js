const express = require("express");
const { allUser, signUp } = require("../controllers/users.controller");

const router = express.Router();

router.post("/signUp", signUp);

router.get("/getAll", allUser);

module.exports = router;
