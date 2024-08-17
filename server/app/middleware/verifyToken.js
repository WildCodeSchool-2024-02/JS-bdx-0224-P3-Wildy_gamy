const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.get("Authorization");

  if (!authorizationHeader) {
    return res.status(401).json({ error: "Authorization header is missing" });
  }

  const [type, token] = authorizationHeader.split(" ");

  if (type !== "Bearer") {
    return res
      .status(401)
      .json({ error: "Authorization header must be of type 'Bearer'" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.APP_SECRET);
    req.auth = {
      role: decodedToken.role,
      email: decodedToken.email,
      id: decodedToken.id,
    };

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = {
  verifyToken,
};
