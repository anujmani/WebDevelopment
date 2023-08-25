const express = require("express");
const userRouter = require("./route/userRoute");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static("views"));

app.use("/", userRouter);

app.listen(8000, () => {
  console.log("Listening to http://localhost:8000");
});
