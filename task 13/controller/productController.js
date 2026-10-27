const getProducts = (req,res)=>{
    res.send("Fetching all products")
}
const postProducts =(req,res)=>{
    res.send('Add a new product')
}
const id = (req,res)=>{
    id=req.params.id;
    res.send(`Product id = ${id}`)
}
const put = (req,res)=>{
    res.send("Put request send")
}
const deleteProduct = (req,res)=>{
    res.send("Delete product")
}
module.exports={
    getProducts,
    postProducts,
    id,
    put,
    deleteProduct
}