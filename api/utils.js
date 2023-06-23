function requireUser(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send('You are not authorized to view this').status(401)
  }
}

module.exports = {
  requireUser
}