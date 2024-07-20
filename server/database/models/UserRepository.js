const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "user" as configuration
    super({ table: "user" });
    this.avatar_image = "client/src/assets/images/avatar/Avatar-basic.svg";
  }

  // The C of CRUD - Create operation

  async create(user) {
    const avatarImage = this.avatar_image;
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
        firstname,
        lastname,
        avatar_image,
        pseudo,
        email,
        hashed_password
        ) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        avatarImage,
        user.pseudo,
        user.email,
        user.hashedPassword,
      ]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `SELECT id, firstname, lastname, avatar_image, pseudo, email, hashed_password FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all programs from the "user" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of users
    return rows;
  }

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `SELECT id, role, email, hashed_password FROM ${this.table} WHERE email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }
  // The U of CRUD - Update operation

  async update(user) {
    // Execute the SQL UPDATE query to update a specific user
    const [result] = await this.database.query(
      `UPDATE ${this.table} 
      SET 
        firstname = ?,
        lastname = ?,
        pseudo = ?,
        email = ?`,
      [
        user.firstname,
        user.lastname,
        user.pseudo,
        user.email,
      ]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific user
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = UserRepository;