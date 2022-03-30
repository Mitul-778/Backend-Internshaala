const authorize = (permittedRole) => {
  return (req, res, next) => {
    const user = req.userId;
    let permission = false;

    if (user.role == permittedRole) {
      permission = true;
    }

    if (permission) {
      return next();
    } else {
      return res.status(401).send({ message: "You are not authorized user" });
    }
  };
};

module.exports = authorize;
