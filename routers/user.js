const { Router } = require("express");
const bcrypt = require("bcrypt");

const router = new Router();

const User = require("../models").user;

router.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/users/signup", async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).send("Missing Parameters");
    } else {
      const newUser = await User.create({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      res.json(newUser);
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});
module.exports = router;
