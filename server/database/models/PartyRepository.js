const AbstractRepository = require("./AbstractRepository");

class PartyRepository extends AbstractRepository {
  constructor() {
    super({ table: "party" });
  }

  async create({ score, userId, gameId }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (score, user_id, game_id)
       VALUES (?, ?, ?)`,
      [score, userId, gameId]
    );
    return result.insertId;
  }

  async getTopScores() {
    const [rows] = await this.database.query(
      `SELECT score, user_id, game_id
       FROM ${this.table}
       ORDER BY score DESC
       LIMIT 3`
    );
    return rows;
  }
}

module.exports = PartyRepository;
