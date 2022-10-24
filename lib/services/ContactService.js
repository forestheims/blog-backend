const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Contact = require('../models/Contact.js');

module.exports = class ContactService {
  static async create({
    email,
    password,
    firstName,
    lastName,
    companyName,
    phoneNumber,
  }) {
    const passwordHash = await bcryptjs.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    );
    const contact = await Contact.create({
      email,
      passwordHash,
      firstName,
      lastName,
      companyName,
      phoneNumber,
    });
    return contact;
  }

  static async signIn({ email, password = '' }) {
    try {
      const contact = await Contact.checkExists(email);
      if (!contact) throw new Error(`email "${email}" does not exist`);
      if (!password) {
        throw new Error('Password is required');
      }
      if (!bcryptjs.compareSync(password, contact.passwordHash))
        throw new Error('Invalid password');
      const token = jwt.sign({ ...contact }, process.env.JWT_SECRET, {
        expiresIn: '1 day',
      });
      return { token, contact };
    } catch (e) {
      e.status = 401;
      throw e;
    }
  }
};
