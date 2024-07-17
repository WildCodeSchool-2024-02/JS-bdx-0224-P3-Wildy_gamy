const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const parties = await tables.party.getTopScores();
    res.status(200).json(parties);
  } catch (err) {
    next(err);
  }
};

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
  browse,
};
