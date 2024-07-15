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
      `SELECT 
            p.score,
            u.pseudo
        FROM 
            party p
        JOIN 
            user u ON p.user_id = u.id
        ORDER BY 
            p.score DESC
        LIMIT 3;`
    );
    return rows;
  }
}

module.exports = PartyRepository;
