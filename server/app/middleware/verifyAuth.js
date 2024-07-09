const argon2 = require("argon2");
const tables = require("../../database/tables");

const verifyAuth = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.email);

    if (user == null) {
      res.status(422).json({ error: "Invalid email or password" });
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (verified) {
      delete user.hashed_password;
      req.user = user;
      next();
    } else {
      res.status(422).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  verifyAuth,
};
