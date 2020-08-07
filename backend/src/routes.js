const express = require('express');
const {celebrate, Joi, Segments} = require('celebrate');

const UserController = require('./controllers/UserController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfilerController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// route for session creation
routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required().length(8),
  })
}), SessionController.create);

// route to list users
routes.get('/users', UserController.index);

// user creation route
routes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().required(),
    email: Joi.string().lowercase().email().required(),
    whatsapp: Joi.string().min(10).max(11).required(),
    city: Joi.string().required(),
    uf: Joi.string().length(2).uppercase().required(),
  })
}), UserController.create);

// route to list incidents
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

// incident creation route
routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required().length(8),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    number: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    client: Joi.string().required(),
    date: Joi.string().required(),
  })
}), IncidentController.create);

// route to exclude incidents
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }) 
}), IncidentController.delete);

// route to list incidents for a specific user
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required().length(8),
  }).unknown(),
}), ProfileController.index);

module.exports = routes;