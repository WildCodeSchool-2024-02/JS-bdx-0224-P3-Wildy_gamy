const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const favorite = req.body;
  try {
    const insertId = await tables.favorite.create(favorite);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const favorite = req.body;
  try {
    await tables.favorite.delete(favorite);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  destroy,
};
