const userID = (req,res)=>{
    const id = req.params.id;
    res.send(` Fetching user with ID : ${id}`)
}

const add = (req,res)=>{
    res.send(`Adding a new user`)
}

const fetch = (req,res)=>{
    res.send(`Fetching all users`)
}

module.exports={
    userID,
    add,
    fetch
}