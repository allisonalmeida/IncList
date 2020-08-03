const connection = require('../database/connection');


module.exports = {
  async index(req, res) {
    const {page = 1} = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('users', 'users.id', '=', 'incidents.user_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*', 
        'users.name', 
        'users.email', 
        'users.whatsapp', 
        'users.city', 
        'users.uf'
      ]);
    
    res.header('X-Total-Count', count['count(*)']);
  
    return res.json(incidents);
  },

  async create(req, res) {
    const {number, title, description, client, date} = req.body;
    const user_id = req.headers.authorization;

    const result = await connection('incidents').insert({
      number,
      title,
      description,
      client,
      date,
      user_id,
    });

    const id = result[0]; // const [id] =

    return res.json({id});
  },

  async delete(req, res) {
    const {id} = req.params;
    const user_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('user_id')
      .first();

    if (incident.user_id !== user_id) {
      return res.status(401).json({erro: 'Operation not permitted.'})
    }

    await connection('incidents').where('id', id).delete();

    return res.status(204).send();
  }
};