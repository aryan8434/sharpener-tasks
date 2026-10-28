const express = require('express')

const routes = express.Router();
const controller = require('../controllers/productController')

routes.get('/',controller.fetch)
routes.get('/:id',controller.Userid)
routes.post('/',controller.add)

module.exports=routes;
