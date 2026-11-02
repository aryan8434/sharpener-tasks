const express = require('express')
const app=express();

const products = require('./controller/productController')
app.get('/products',products.fetch)
app.listen(4000);