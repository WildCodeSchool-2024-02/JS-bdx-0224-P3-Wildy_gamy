const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
  }

  async create(favorite) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, game_id, is_favorite) VALUES (?, ?, ?)`,
      [favorite.userId, favorite.gameId, favorite.favoriteCheckbox]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(favorite) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} 
      SET 
        is_favorite = ?,
        user_id = ?,
        game_id = ?
      WHERE id = ?`,
      [favorite.is_favorite, favorite.user_id, favorite.game_id, favorite.id]
    );

    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = FavoriteRepository;
