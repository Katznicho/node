const express = require("express")
const router  = express.Router();
const {save, login} = require("../../controllers/userControllers")
router.post("/register", save);
router.post("/login", login)

module.exports =router