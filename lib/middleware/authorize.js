module.exports = async (req, res, next) => {
  try {
    if (!req.contact || req.contact.email !== process.env.AUTH_EMAIL)
      throw new Error('not your blog, but I encourage you to write elsewhere.');
    next();
  } catch (e) {
    e.status = 403;
    next(e);
  }
};
