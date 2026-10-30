const path = require('path')
const fetch = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","home.html"))

}

module.exports={
    fetch
}