const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const users = await connection('users').select('*');
  
    return res.json(users);
  },  

  async create(req, res) {
    const {name, email, whatsapp, city, uf} = req.body;

    const id = crypto.randomBytes(4).toString('hex');

    await connection('users').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({id});
  }
};