const path = require('path')
const fetch = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","home.html"))

}
const addProduct = (req,res)=>{
    console.log(req.body);
    res.json(req.body);
}
module.exports={
    fetch, addProduct
}