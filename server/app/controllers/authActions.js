const login = async (req, res, next) => {
  const {token} = req;

  try {
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
