const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routers/user.router.js");
const { errorHandler } = require("./middlewares/errorHandler.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.use("*", (req, res) => {
  res.send("<h1><pre>Router doesn't exist!</pre></h1>");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
