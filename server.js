const express = require("express")
const app = express()
const axios = require("axios")
const path = require("path")

app.get("/hello", function(req,res){
    const index = path.join(__dirname, '/', '../project', 'index.html' );
    res.sendFile(index);
})

app.get('/api', async function(req,res){

 console.log(req._parsedUrl.query)
 let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query
 let r = await axios(url)
 let a = r.data
 res.json(a)
})



app.listen(3000)