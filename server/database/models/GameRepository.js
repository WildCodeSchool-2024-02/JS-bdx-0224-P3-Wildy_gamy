const AbstractRepository = require("./AbstractRepository");

class GameRepository extends AbstractRepository {
  constructor() {
    super({ table: "game" });
  }

  // The C of CRUD - Create operation
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

  // Execute the SQL INSERT query to add a new item to the "item" table

  // Return the ID of the newly inserted item

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  // Execute the SQL UPDATE query to update a specific program

  // Return how many rows were affected

  // The D of CRUD - Delete operation

  // Execute the SQL DELETE query to delete a specific program

  // Return how many rows were affected
}

module.exports = GameRepository;
