const database = require("../createTables");

const LoginModel = database.login;

async function loginUser(req, res) {
  try {
    await LoginModel.create(req.body);
    res.status(200).send("Login successfull");
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = { loginUser };
