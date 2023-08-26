const database = require("../createTables");

const CartModel = database.cart;

async function addCart(req, res) {
  try {
    await CartModel.create(req.body);
    res.status(200).send("Added to cart");
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getCart(req, res) {
  try {
    const data = await CartModel.findAll();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteCart(req, res) {
  try {
    await CartModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("Removed");
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { addCart, getCart, deleteCart };
