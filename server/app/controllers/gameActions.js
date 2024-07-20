// Import access to database tables
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    if (req.auth && req.auth.id) {
      const userFavorites = await tables.game.readAllWithFavorites(req.auth.id);
      res.json(userFavorites);
    } else {
      const games = await tables.game.readAll(); 
      res.json(games);
    }
  } catch (err) {
    console.error("Browse error:", err);
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const game = await tables.game.read(req.params.id);

    if (game == null) {
      res.sendStatus(404);
    } else {
      res.json(game);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
