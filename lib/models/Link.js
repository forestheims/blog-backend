const pool = require('../utils/pool');

module.exports = class Link {
  id;
  title;
  link_url;
  tags;
  order_index;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.link_url = row.link_url;
    this.tags = row.tags;
    this.order_index = row.order_index;
  }

  static async create({ title, link_url, tags }) {
    const { rows } = await pool.query(
      `INSERT INTO links (title, link_url, tags)
      VALUES ($1, $2, $3)
      RETURNING *;`,
      [title, link_url, tags]
    );
    return new Link(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `SELECT *
      FROM links;`
    );
    if (!rows) return null;
    return rows.map((row) => new Link(row));
  }
};
