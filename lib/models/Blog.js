const pool = require('../utils/pool');

module.exports = class Blog {
  id;
  title;
  tags;
  createdAt;
  content;
  imgURL;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.tags = row.tags;
    this.createdAt = row.created_at;
    this.content = row.content;
    this.imgURL = row.img_url;
  }

  static async create({ title, tags, createdAt, content, imgURL }) {
    const { rows } = await pool.query(
      `INSERT INTO blogs (title, tags, created_at, content, img_url)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;`,
      [title, tags, createdAt, content, imgURL]
    );
    return new Blog(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `SELECT *
      FROM blogs;`
    );
    if (!rows) return null;
    return rows.map((row) => new Blog(row));
  }
};
