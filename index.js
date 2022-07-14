const express = require("express");
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");

const app = express();
const jsonParser = express.json();
const port = 4000;

app.use(jsonParser);

app.use(imageRouter);
app.use(userRouter);
app.use(authRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
