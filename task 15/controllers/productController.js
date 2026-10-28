const productService = require('../services/productService')

const fetch = (req,res)=>{
    res.send(productService.getAllProducts())
}

const add = (req,res)=>{
    res.send(productService.addProduct())
}

const Userid = (req,res)=>{
    const id = req.params.id;
    res.send(productService.getProductById(id))
}

module.exports = {
    Userid,
    add,
    fetch
}