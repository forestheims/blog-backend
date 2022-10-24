const pool = require('../utils/pool');

module.exports = class Project {
  createdAt;
  id;

  constructor(row) {
    this.createdAt = row.createdAt;
    this.id = row.id;
  }

  static async create({ name, link }) {
    const { rows } = await pool.query(
      `INSERT INTO projects (name, link)
        VALUES ($1, $2)
        RETURNING *;`,
      [name, link]
    );
    return new Project(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `SELECT *
        FROM projects;`
    );
    if (!rows) return null;
    return rows.map((row) => new Project(row));
  }
};
