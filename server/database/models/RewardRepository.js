const AbstractRepository = require("./AbstractRepository");

class RewardRepository extends AbstractRepository {
  constructor() {
    super({ table: "reward" });
  }

  async create(reward) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, remaining_quantity, price, image) VALUES (?, ?, ?, ?, ?)`,
      [
        reward.name,
        reward.description,
        reward.remaining_quantity,
        reward.price,
        reward.image,
      ]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = RewardRepository;
