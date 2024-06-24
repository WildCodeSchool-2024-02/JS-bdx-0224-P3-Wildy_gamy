const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const rewards = await tables.item.readAll();
    res.json(rewards);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
