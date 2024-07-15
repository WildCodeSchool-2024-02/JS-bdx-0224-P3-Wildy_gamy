const AbstractRepository = require("./AbstractRepository");

class CoinRepository extends AbstractRepository {
  constructor() {
    super({ table: "coin" });
  }

  async create({ coin }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id)
       VALUES (?)`,
      [coin.userId]
    );
    return result.insertId;
  }
}

module.exports = CoinRepository;
