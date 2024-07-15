const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const party = req.body;

  try {
    const insertId = await tables.party.create(party);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
};
