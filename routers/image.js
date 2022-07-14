const { Router } = require("express");

const router = new Router();

const Image = require("../models").image;

router.get("/images", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    const newImage = await Image.create({ title, url });
    res.send(newImage);
  } catch (e) {
    console.log(e, message);
    next(e);
  }
});

module.exports = router;
