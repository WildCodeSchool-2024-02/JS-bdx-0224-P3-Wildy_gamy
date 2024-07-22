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

  async readUserScore(id) {
    const [rows] = await this.database.query(
      `SELECT user.id, user.firstname, user.lastname, user.avatar_image, user.pseudo, user.email, user.hashed_password, party.score FROM ${this.table} 
      JOIN party ON user.id = party.user_id WHERE user.id = ? ORDER BY 
            party.score DESC
        LIMIT 3`,
      [id]
    );
    const user = {
      id: rows[0].id,
      firstname: rows[0].firstname,
      lastname: rows[0].lastname,
      avatar_image: rows[0].avatar_image,
      pseudo: rows[0].pseudo,
      email: rows[0].email,
      hashed_password: rows[0].hashed_password,
      scores: rows.map((row) => row.score),
    };

    return user;
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
        email = ?
      WHERE id = ?`,
      [user.firstname, user.lastname, user.pseudo, user.email, user.id]
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
