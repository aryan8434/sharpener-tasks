const express= require('express')
const app=express();

const user = require('./routes/users')
app.use('/users',user)

const orders = require('./routes/cart')
app.use('/cart',orders);

const products = require('./routes/products')
app.use('/products',products)

app.listen(3000, console.log("Running on 3000"))