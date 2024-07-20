const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
  }

  async create(favorite) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, game_id) VALUES (?, ?)`,
      [favorite.userId, favorite.gameId]
    );
    return result.insertId;
  }

  async delete(favorite) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id = ? AND game_id = ?`,
      [favorite.userId, favorite.gameId]
    );
    return result.affectedRows;
  }
}

module.exports = FavoriteRepository;
