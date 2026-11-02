const express = require('express')

const routes = express.Router();

const cartController = require('../controller/cartcontroller');

routes.get('/:id', cartController.userID);

routes.post('/:id', cartController.ID);

module.exports = routes;