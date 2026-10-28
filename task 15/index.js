const express = require('express')
const app = express();

const product = require('./routes/productRoutes')
app.use('/products',product)

app.listen(3000)