const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const rewards = await tables.reward.readAll();
    res.json(rewards);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
