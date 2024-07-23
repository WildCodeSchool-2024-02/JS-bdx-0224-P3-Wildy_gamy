const jwt = require("jsonwebtoken");

const getUserId = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader) {
      const [type, token] = authorizationHeader.split(" ");

      if (type === "Bearer" && token) {
        const decodedToken = jwt.verify(token, process.env.APP_SECRET);
        req.auth = {
          id: decodedToken.id,
        };
      }
    }
  } catch (err) {
    next();
  }
  next();
};

module.exports = {
  getUserId,
};
