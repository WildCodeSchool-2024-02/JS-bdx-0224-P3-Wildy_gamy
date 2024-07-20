const jwt = require("jsonwebtoken");

const verifyToken = (isRequired) => (req, res, next) => {
  try {
    // Vérifier la présence de l'en-tête "Authorization" dans la requête
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    // Vérifier que l'en-tête a la forme "Bearer <token>"
    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    // Vérifier la validité du token (son authenticité et sa date d'expériation)
    // En cas de succès, le payload est extrait et décodé
    const decodedToken = jwt.verify(token, process.env.APP_SECRET);
    req.auth = {
      role: decodedToken.role,
      email: decodedToken.email,
      id: decodedToken.id,
    };
    next();
  } catch (err) {
    if (isRequired) {
      res.sendStatus(401);
      next(err);
    } else {
      next(); // Allow the request to pass through if not required
    }
  }
};

module.exports = {
  verifyToken,
};
