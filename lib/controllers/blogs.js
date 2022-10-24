const { Router } = require('express');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    res.json({ message: 'hello' });
  } catch (e) {
    next(e);
  }
});
