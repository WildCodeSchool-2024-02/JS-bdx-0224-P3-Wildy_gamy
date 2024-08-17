const { addDays, format } = require("date-fns");
const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
    this.avatar_image = "client/src/assets/images/avatar/Avatar-basic.svg";
  }

  async create(user) {
    const avatarImage = this.avatar_image;
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
    return result.insertId;
  }

  async readUserScoreCoin(id) {
    const [scoreRows] = await this.database.query(
      `SELECT 
        user.id, 
        user.firstname, 
        user.lastname, 
        user.avatar_image, 
        user.pseudo, 
        user.email, 
        party.id AS party_id, 
        party.score
      FROM ${this.table} 
      LEFT JOIN party ON user.id = party.user_id 
      WHERE user.id = ? 
      ORDER BY party.score DESC
      LIMIT 3`,
      [id]
    );

    const [coinRows] = await this.database.query(
      `SELECT 
        user.id, 
        coin.id AS coin_id, 
        coin.obtention_date
      FROM ${this.table} 
      LEFT JOIN coin ON user.id = coin.user_id 
      WHERE user.id = ? 
      ORDER BY coin.obtention_date ASC
      LIMIT 3`,
      [id]
    );

    const scores = scoreRows.map((row) => ({
      party_id: row.party_id,
      score: row.score,
    }));

    const coins = coinRows.map((row) => ({
      coin_id: row.coin_id,
      expiration_date: format(
        addDays(new Date(row.obtention_date), 15),
        "dd/MM/yyyy"
      ),
    }));

    const user = {
      id: scoreRows[0].id,
      firstname: scoreRows[0].firstname,
      lastname: scoreRows[0].lastname,
      avatar_image: scoreRows[0].avatar_image,
      pseudo: scoreRows[0].pseudo,
      email: scoreRows[0].email,
      parties: scores,
      coins,
    };
    return user;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT id, role, email, hashed_password 
      FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return rows[0];
  }

  async update(user) {
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
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = UserRepository;
