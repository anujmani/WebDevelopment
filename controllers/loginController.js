const database = require("../createTables");

const LoginModel = database.login;

async function loginUser(req, res, next) {
  try {
    await LoginModel.create(req.body);
    res.status(200).json("Login successfull");
  } catch (err) {
    res.status(500).json(err);
  }
}
module.exports = { loginUser };
