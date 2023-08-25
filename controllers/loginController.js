const database = require("../createTables");

const LoginModel = database.login;

async function checkUser(req, res, next) {
    try {
      await LoginModel.create({
        where: req.body,
      })
      res.json("Login successfull", res.statusCode);
    } catch (err) {
      res.status(500).json(err, res.statusCode)
    }
  }
  
  async function addUser(req, res, next) {
    try {
      const username = await createUsername(req.body.username);
      const password = await bcrypt.hash(req.body.password, 10);
      const data = {
        name: req.body.name,
        username,
        email: req.body.email,
        password,
      };
      await createUser(data);
      res.json(response(`${username} created`, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  
  module.exports = { checkUser, addUser };