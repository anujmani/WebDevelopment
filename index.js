const express = require("express");
const sequelize = require("./database");
const userRouter = require("./views/route/userRoute");
const app = express();

app.use(express.json())

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.use(express.static("views"))

app.use(userRouter)

app.listen(8080, ()=> {
    console.log("Listening to http://localhost:8080")
})