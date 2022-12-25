const { Router } = require('express');
const Blog = require('../models/Blog');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const blogs = await Blog.getAll();
      res.json(blogs);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const blog = await Blog.create(req.body);
      res.json(blog);
    } catch (e) {
      next(e);
    }
  });
