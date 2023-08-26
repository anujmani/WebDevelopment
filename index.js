const express = require("express");
const userRouter = require("./route/userRoute");
const app = express();
const cors = require("cors");
const cartRouter = require("./route/cartRoute");

app.use(express.json());

app.use(cors());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static("views"));

app.use("/", userRouter);

app.use("/cart", cartRouter);

app.listen(8080, () => {
  console.log("Listening to http://localhost:8080");
});
