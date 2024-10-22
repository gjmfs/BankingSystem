const express = require("express");
const {
  userCreate,
  findUser,
  Login,
  CheckUser,
  Transfer,
} = require("../controllers/userController");

const router = express.Router();

//Routes

//create user account
router.post("/", userCreate);

//read user
router.get("/", findUser);

//check login User
router.post("/login", Login);

//check user for transection
router.post("/checkUser", CheckUser);

//transfer money
router.patch("/reciveMoney", Transfer);

module.exports = router;
