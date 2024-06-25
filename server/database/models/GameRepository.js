const AbstractRepository = require("./AbstractRepository");

class GameRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
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
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // Execute the SQL UPDATE query to update a specific program

  // Return how many rows were affected

  // The D of CRUD - Delete operation

  // Execute the SQL DELETE query to delete a specific program

  // Return how many rows were affected
}

module.exports = GameRepository;
