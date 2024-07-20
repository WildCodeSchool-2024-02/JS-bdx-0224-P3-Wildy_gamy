const AbstractRepository = require("./AbstractRepository");

class GameRepository extends AbstractRepository {
  constructor() {
    super({ table: "game" });
  }

  async create(game) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, image_demo, image_game, is_playable, release_date)
                VALUES (?, ?, ?, ?, ?, ?)`,
      [
        game.name,
        game.description,
        game.image_demo,
        game.image_game,
        game.is_playable,
        game.release_date,
      ]
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

  async readAllWithFavorites(userId) {
    const [rows] = await this.database.query(
      `SELECT 
        game.*,
        IF(f.user_id IS NULL, FALSE, TRUE) AS is_favorite
      FROM ${this.table} AS game
      LEFT JOIN favorite f ON game.id = f.game_id AND f.user_id = ?
      `,
      [userId]
    );
    return rows;
  }
}

module.exports = GameRepository;
