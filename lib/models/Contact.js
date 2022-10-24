const pool = require('../utils/pool');

module.exports = class Contact {
  createdAt;
  email;
  id;
  #passwordHash;
  firstName;
  lastName;
  companyName;
  phoneNumber;

  constructor(row) {
    this.createdAt = row.createdAt;
    this.email = row.email;
    this.phoneNumber = row.phone_number;
    this.id = row.id;
    this.#passwordHash = row.password_hash;
    this.firstName = row.first_name;
    this.lastName = row.last_name;
    this.companyName = row.company_name;
  }

  static async create({
    email,
    passwordHash,
    firstName,
    lastName,
    companyName,
    phoneNumber,
  }) {
    const { rows } = await pool.query(
      `INSERT INTO
        contacts (email, password_hash, first_name, last_name, company_name, phone_number)
      VALUES
        ($1, $2, $3, $4, $5, $6)
      RETURNING 
        *;`,
      [email, passwordHash, firstName, lastName, companyName, phoneNumber]
    );

    return new Contact(rows[0]);
  }

  static async checkExists(email) {
    const { rows } = await pool.query(
      `SELECT
        *
      FROM
        contacts
      WHERE
        email = $1;`,
      [email]
    );
    if (!rows) return null;
    return new Contact(rows[0]);
  }

  get passwordHash() {
    return this.#passwordHash;
  }
};
