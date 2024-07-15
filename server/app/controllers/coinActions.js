const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const coin = req.body;

  try {
    const insertId = await tables.party.create(coin);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
};
