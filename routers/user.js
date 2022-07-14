const { Router } = require("express");

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

module.exports = router;
