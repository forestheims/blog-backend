const { Router } = require('express');
const jwt = require('jsonwebtoken');
const ContactService = require('../services/ContactService.js');
const authenticate = require('../middleware/authenticate.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const contact = await ContactService.create(req.body);
      const token = jwt.sign({ ...contact }, process.env.JWT_SECRET, {
        expiresIn: '1 day',
      });
      res
        .cookie(process.env.COOKIE_NAME, token, {
          httpOnly: true,
          secure: process.env.SECURE_COOKIES === 'true',
          sameSite: process.env.SECURE_COOKIES === 'true' ? 'none' : 'strict',
          maxAge: 1000 * 60 * 60 * 24,
        })
        .json(contact);
    } catch (e) {
      next(e);
    }
  })
  .post('/sessions', async (req, res, next) => {
    try {
      const { token, contact } = await ContactService.signIn(req.body);
      res
        .cookie(process.env.COOKIE_NAME, token, {
          httpOnly: true,
          secure: process.env.SECURE_COOKIES === 'true',
          sameSite: process.env.SECURE_COOKIES === 'true' ? 'none' : 'strict',
          maxAge: 1000 * 60 * 60 * 24,
        })
        .json(contact);
    } catch (e) {
      next(e);
    }
  })
  .get('/', authenticate, async (req, res, next) => {
    try {
      res.json(req.contact);
    } catch (e) {
      next(e);
    }
  })
  .delete('/sessions', (req, res, next) => {
    try {
      res
        .clearCookie(process.env.COOKIE_NAME, {
          httpOnly: true,
          secure: process.env.SECURE_COOKIES === 'true',
          sameSite: process.env.SECURE_COOKIES === 'true' ? 'none' : 'strict',
          maxAge: 1000 * 60 * 60 * 24,
        })
        .status(204)
        .json({});
    } catch (e) {
      next(e);
    }
  });
