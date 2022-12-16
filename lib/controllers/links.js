const { Router } = require('express');
const Link = require('../models/Link');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const links = await Link.getAll();
      res.json(links);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const link = await Link.create(req.body);
      res.json(link);
    } catch (e) {
      next(e);
    }
  });
