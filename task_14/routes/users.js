const express= require('express');
const routes = express.Router();
const controller = require('../controller/userscontroller')

routes.get('/',controller.fetch);
routes.post('/',controller.add);
routes.get('/:id',controller.userID)

module.exports = routes;