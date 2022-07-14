const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("./models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Missing Credentials");
    }
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      return res.status(400).send("Missing Credentials");
    }
    const samePwd = bcrypt.compareSync(password, user.password);
    if (samePwd) {
      const token = toJWT({ userId: user.id });
      res.send({ message: "Welcome!!", token });
    } else {
      res.status(400).send("Missing Credentials");
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
