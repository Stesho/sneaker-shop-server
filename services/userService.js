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

  async getUserById(id) {
    const user = await db.query(
      'SELECT * FROM account WHERE id = $1',
      [id]
    );
    return user.rows[0];
  }

  async updateUser(id, user) {
    const {name, surname, email, password, orders} = user;
    // const JSONorders = orders.map(item => JSON.stringify(item));
    // console.log(JSONorders);
    // console.log(`UPDATE account SET name = $1, surname = $2, email = $3, password = $4, orders = ARRAY ${JSONorders} where id = $5 RETURNING *`);

    const updatedUser = await db.query(
      'UPDATE account SET name = $1, surname = $2, email = $3, password = $4, orders = $5 where id = $6 RETURNING *',
      [name, surname, email, password, orders, id]
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
