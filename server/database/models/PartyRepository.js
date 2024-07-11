const AbstractRepository = require("./AbstractRepository");

class PartyRepository extends AbstractRepository {
  constructor() {
    super({ table: "party" });
  }

  // The C of CRUD - Create operation
  async create(party) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (score, user_id, game_id)
                VALUES (?, ?, ?)`,
      [party.score, party.userId, party.gameId]
    );
    return result.insertId;
  }
  // Execute the SQL INSERT query to add a new item to the "item" table
  // Return the ID of the newly inserted item
  // The Rs of CRUD - Read operations

  // Execute the SQL UPDATE query to update a specific program
  // Return how many rows were affected
  // The D of CRUD - Delete operation
  // Execute the SQL DELETE query to delete a specific program
  // Return how many rows were affected
}
module.exports = PartyRepository;
