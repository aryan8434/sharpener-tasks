const express = require('express')
const routes = express.Router();
const controller = require('../controller/productscontroller')

routes.get('/',controller.fetch);
routes.post('/',controller.add)
routes.get('/:id',controller.Userid)

module.exports = routes;