import db from '../db.js';

class UserService {
  async createUser(user) {
    const {name, surname, email, password} = user;
    const newUser = await db.query(
      'INSERT INTO account (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, surname, email, password]
    );
    return newUser.rows[0];
  }

  async getUserByEmail(email) {
    const user = await db.query(
      'SELECT * FROM account WHERE email = $1',
      [email]
    );
    return user.rows[0];
  }

  async updateUser(id, user) {
    const {name, surname, email, password} = user;
    const updatedUser = await db.query(
      'UPDATE account SET name = $1, surname = $2, email = $3, password = $4 where id = $5 RETURNING *',
      [name, surname, email, password, id]
    );
    return updatedUser.rows[0];
  }

  async deleteUser(id) {
    const user = await db.query(
      'DELETE FROM account where id = $1 RETURNING *',
      [id]);
    return user.rows[0];
  }
}

export default new UserService();
