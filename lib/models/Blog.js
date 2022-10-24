const pool = require('../utils/pool');

module.exports = class Blog {
  createdAt;
  id;
  title;
  content;

  constructor(row) {
    this.createdAt = row.createdAt;
    this.id = row.id;
    this.title = row.title;
    this.content = row.content;
  }

  static async create({ title, content }) {
    const { rows } = await pool.query(
      `INSERT INTO blogs (title, content)
      VALUES ($1, $2)
      RETURNING *;`,
      [title, content]
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
