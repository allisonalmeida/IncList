const express = require('express');

const UserController = require('./controllers/UserController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfilerController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// route for session creation
routes.post('/sessions', SessionController.create);

// route to list users
routes.get('/users', UserController.index);

// user creation route
routes.post('/users', UserController.create);

// route to list incidents
routes.get('/incidents', IncidentController.index);

// incident creation route
routes.post('/incidents', IncidentController.create);

// route to exclude incidents
routes.delete('/incidents/:id', IncidentController.delete);

// route to list incidents for a specific user
routes.get('/profile', ProfileController.index);

module.exports = routes;