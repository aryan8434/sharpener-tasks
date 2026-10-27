const express = require('express');
const routes = express.Router();
const controller = require('../controller/productController')

routes.get('/',controller.getProducts)

routes.post('/',controller.postProducts)

routes.get('/:id',controller.id)

routes.put('/',controller.put)

routes.delete('/',controller.deleteProduct)

module.exports=routes;