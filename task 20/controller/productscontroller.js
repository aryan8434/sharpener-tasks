const fetch = (req,res)=>{
    res.send(`Fetching all products`)
}

const add = (req,res)=>{
    res.send(`Adding a new product`)
}

const Userid = (req,res)=>{
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`)
}

module.exports={
    Userid,
    add,fetch
}