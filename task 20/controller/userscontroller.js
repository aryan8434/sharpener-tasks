const userID = (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  return res.json({ result: id <= 10 });
};

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