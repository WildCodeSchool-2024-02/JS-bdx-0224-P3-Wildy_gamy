const jwt = require("jsonwebtoken");

const generateToken = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const token = jwt.sign(
      { id: req.user.id, role: req.user.role },
      process.env.APP_SECRET,
      { expiresIn: "1h" }
    );
    req.token = token;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  generateToken,
};
