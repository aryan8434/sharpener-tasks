const express= require('express')
const routes = express.Router();
const controller = require('../controller/productController')
routes.get('/',controller.fetch)
module.exports =routes;