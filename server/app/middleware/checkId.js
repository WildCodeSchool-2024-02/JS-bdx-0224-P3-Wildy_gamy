const checkId = (req, res, next) => {
  try {
    const authId = req.auth.id;
    const paramsId = parseInt(req.params.id, 10);

    if (Number.isNaN(paramsId)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    if (authId !== paramsId) {
      return res.status(403).json({
        error: "Forbidden: You do not have permission to perform this action",
      });
    }

    return next();
  } catch (err) {
    return res.status(422).json({ error: "Unprocessable entity" });
  }
};

module.exports = {
  checkId,
};
